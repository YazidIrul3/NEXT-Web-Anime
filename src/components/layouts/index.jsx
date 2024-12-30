"use client";
import Card from "../fragments/Card";
import Link from "next/link";
import AnimeCardLoading from "../fragments/AnimeCardLoading";
import TopAnimeCard from "../fragments/TopAnimeCard";
import EachUtils from "@/utils/Eachutils";

const HomeLayout = ({ anime, topAnime, loading, isLoad }) => {
  return (
    <div className="2xl:container mx-auto px-5 py-8 bg-slate-950 flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-7">
      <div className="2xl:w-5/6 w-full">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold">My Anime</h1>

          <Link
            href={"/anime/top?page=1"}
            className=" font-bold text-slate-50 text-sm px-3 py-1 rounded-xl bg-blue-800"
          >
            All Anime
          </Link>
        </div>
        {isLoad ? (
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 py-2 grid-cols-3 gap-4">
            {loading.map((_, i) => {
              return <AnimeCardLoading key={i} />;
            })}
          </div>
        ) : (
          <div>
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 py-2 grid-cols-3 gap-4">
              <EachUtils
                of={anime?.data?.data}
                render={(item, i) => <Card key={i} anime={item} />}
              />
            </div>
          </div>
        )}
      </div>

      <div className=" flex flex-col gap-4 2xl:w-2/6 xl:w-2/6 lg:w-3/6 w-full">
        <h1 className="text-xl font-bold">Top Anime</h1>
        <div className=" bg-opacity-55 max-h-[1000px] overflow-y-scroll scrollbar-none ">
          <div className="bg-blue-800">
            {isLoad ? (
              <div className="">
                {loading.map((_, i) => {
                  return <AnimeCardLoading key={i} />;
                })}
              </div>
            ) : (
              <EachUtils
                of={topAnime?.anime?.data?.data}
                render={(item, i) => <TopAnimeCard anime={item} />}
              />
            )}
          </div>

          <div className=" font-bold text-slate-50 text-sm px-3 mt-4 border hover:bg-slate-50 hover:text-slate-900 hover:border-slate-50 border-slate-50 py-2 rounded-lg w-full">
            <Link
              href="/anime/top"
              className=" text-center flex items-center justify-center text-lg"
            >
              Other
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
