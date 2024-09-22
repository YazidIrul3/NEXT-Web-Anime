"use client";
import { useFetchAnime } from "@/features/anime/useFetchAnime";
import Card from "../fragments/Card";
import Link from "next/link";
import AnimeCardLoading from "../fragments/AnimeCardLoading";
import TopAnimeCard from "../fragments/TopAnimeCard";

const HomeLayout = () => {
  const { anime, isLoad } = useFetchAnime("anime?limit=12");
  const topAnime = useFetchAnime("top/anime?limit=8");
  const loading = Array(12).fill(null);

  console.log(topAnime?.anime);

  return (
    <div className="container mx-auto px-5 py-8 bg-slate-950 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col gap-7">
      <div className="2xl:w-5/6 xl:w-5/6 lg:w-5/6 mdw:w-5/6 w-full">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold">My Anime</h1>

          <Link
            href={"/anime/top"}
            className=" font-bold text-slate-50 text-sm px-3 py-1 rounded-xl bg-blue-800"
          >
            All Anime
          </Link>
        </div>
        {isLoad ? (
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 4g:grid-cols-5  sm:grid-cols-4 grid-cols-3 gap-4">
            {loading.map((_, i) => {
              return <AnimeCardLoading key={i} />;
            })}
          </div>
        ) : (
          <div>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 py-2 sm:grid-cols-4 grid-cols-3 gap-4">
              {anime?.data?.data?.map((item, i) => {
                return <Card key={i} anime={item} />;
              })}
            </div>
          </div>
        )}
      </div>

      <div className=" flex flex-col gap-4 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-2/6 w-full">
        <h1 className="text-xl font-bold">Top Anime</h1>
        <div className=" bg-opacity-55 max-h-[1000px] overflow-y-scroll scrollbar-none ">
          <div className="bg-blue-800">
            {topAnime?.anime?.data?.data?.map((item, i) => {
              return <TopAnimeCard key={i} anime={item} />;
            })}
          </div>

          <div className=" font-bold text-slate-50 text-sm px-3 mt-4 border hover:bg-slate-50 hover:text-slate-900 hover:border-slate-50 border-slate-50 py-2 rounded-lg w-full">
            <Link href="/anime/top" className=" text-center flex items-center justify-center text-lg">Other</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
