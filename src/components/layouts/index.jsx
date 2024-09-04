"use client";
import { useFetchAnime } from "@/features/anime/useFetchAnime";
import Card from "../fragments/Card";
import Link from "next/link";
import AnimeCardLoading from "../fragments/AnimeCardLoading";

const HomeLayout = () => {
  const { anime, isLoad } = useFetchAnime("top/anime?limit=12");
  const loading = Array(12).fill(null);

  return (
    <div className="container mx-auto px-5 py-8 bg-slate-950 h-screen">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold">Top Anime</h1>
        <Link
          href={"/anime/top"}
          className=" font-bold text-slate-50 text-sm px-2 rounded-xl bg-blue-500"
        >
          All Anime
        </Link>
      </div>
      {isLoad ? (
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5  sm:grid-cols-4 grid-cols-3 gap-4">
          {loading.map((_, i) => {
            return <AnimeCardLoading key={i} />;
          })}
        </div>
      ) : (
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 py-2 sm:grid-cols-4 grid-cols-3 gap-4">
          {anime?.data?.data?.map((item, i) => {
            return <Card key={i} anime={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomeLayout;
