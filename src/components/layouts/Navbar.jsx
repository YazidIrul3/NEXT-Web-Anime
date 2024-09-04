"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const { value, name } = e.target;
    e.preventDefault();

    setSearch(value);
  };

  return (
    <div className="bg-slate-950 text-slate-50 p-4 flex gap-4 items-center">
      <h1 className=" font-extrabold 2xl:text-xl xl:text-xl lg:text-lg md:text-lg text-sm text-yellow-500">YKH Anime</h1>

      <div className="relative w-64">
        <input
          className=" bg-slate-900 text-slate-50 px-2 py-1 rounded-lg w-full"
          placeholder="search...."
          type="text"
          onChange={handleSearch}
        />

        <Link
          href={`/anime/search/${search}`}
          className=" absolute top-1/2 -translate-y-1/2 right-2 text-lg font-bold"
        >
          <MagnifyingGlass />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
