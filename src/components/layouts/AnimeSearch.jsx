"use client";
import { useFetchAnime } from "@/features/anime/useFetchAnime";
import Card from "../fragments/Card";
import CardSearch from "../fragments/CardSearch";
import Spinner from "../fragments/Spinner";

const AnimeSearch = ({ search }) => {
  const { anime, isLoad } = useFetchAnime(`anime?q=${search}`);
  const { anime2, isLoad2 } = useFetchAnime(`anime?q=${search}`);

  return (
    <div className="container mx-auto p-5 bg-slate-950 h-screen">
      {isLoad ? (
        <div className="flex items-center justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-2">Search Anime</h1>
          <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5  sm:grid-cols-4 grid-cols-3 gap-4">
            {anime?.data?.data?.map((item, i) => {
              return <CardSearch key={i} anime={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
