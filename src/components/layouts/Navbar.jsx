"use client";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { anime, isLoad } = FetchAnime(`anime?q=${search}&limit=5`, search);
  const handleSearch = (e) => {
    const { value, name } = e.target;
    e.preventDefault();

    setSearch(value);
  };
  const handleClick = () => {
    setSearch("");
  };

  return (
    <div className="bg-slate-950 text-slate-50 p-4 flex gap-4 items-center">
      <Link href={"/"}>
        <h1 className=" font-extrabold 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-sm text-yellow-500">
          YKH Anime
        </h1>
      </Link>

      <div className="relative w-64">
        <input
          className=" bg-slate-900 text-slate-50 px-2 py-1 rounded-lg w-full"
          placeholder="search...."
          type="text"
          onChange={handleSearch}
        />

        <Link
          href={`/anime/search/${search}`}
          onClick={handleClick}
          className=" absolute top-1/2 -translate-y-1/2 right-2 text-xl font-extrabold text-slate-50 p-2"
        >
          <MagnifyingGlass />
        </Link>
      </div>

      {search !== "" && (
        <div className="flex flex-col gap-2 bg-slate-50 absolute top-16 left-24 text-slate-950 w-[300px] z-50">
          {anime?.data?.data?.map((item, i) => {
            return (
              <Link
                href={`/anime/${item?.mal_id}`}
                onClick={handleClick}
                className=" flex flex-row items-center gap-2 p-2 hover:bg-yellow-500 z-50 hover:text-slate-50"
                key={i}
              >
                <Image
                  className=" w-[50px] h-[70px] rounded-sm"
                  src={item?.images?.jpg?.image_url || ""}
                  alt="image anime"
                  width={1000}
                  height={1000}
                />
                <h1 className=" text-slate-950 font-bold text-justify">{item?.title}</h1>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
