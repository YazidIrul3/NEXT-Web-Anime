"use client";
import { Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CardSearch = ({ anime }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/anime/${anime?.mal_id}`}
      className={`min-h-full relative hover:text-blue-500 hover:${() =>
        setHover(true)}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="flex flex-col gap-2 ">
        <div className="relative">
          <Image
            className="  hover:bg-slate-900 object-cover rounded-xl 2xl:h-[300px] xl:h-[270px] lg:h-[250px] md:h-[250px] sm:h-[250px] min-h-[170px]"
            src={anime?.images?.webp?.image_url}
            alt="image anime"
            width={1000}
            height={1000}
          />

          <div className="bottom-0 right-0 py-1 px-4 rounded-bl-xl rounded-tr-xl bg-blue-500 text-slate-50 text-xs absolute flex justify-center items-center font-bold">
            Ep. {anime?.episodes}
          </div>
        </div>

        <div>
          <h1 className="text-sm font-bold">{anime?.title}</h1>
        </div>
      </div>

      <div
        className={`${
          !hover ? "hidden" : "flex"
        } bg-opacity-50 hover:flex text-5xl font-bold justify-center items-center absolute top-0 text-slate-50 w-full bg-slate-900 2xl:h-[300px] xl:h-[270px] lg:h-[250px] md:h-[250px] sm:h-[250px] h-[200px] xs:w-[200px] xs:h-[150px]`}
      >
        <Play />
      </div>
    </Link>
  );
};

export default CardSearch;
