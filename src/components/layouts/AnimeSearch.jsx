"use client";
import CardSearch from "../fragments/CardSearch";
import Spinner from "../fragments/Spinner";
import EachUtils from "@/utils/Eachutils";

const AnimeSearch = ({ anime, anime2, isLoad }) => {
  return (
    <div className="container mx-auto p-5 bg-slate-950 h-screen">
      {isLoad ? (
        <div className="flex items-center justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-2">Search Anime</h1>
          <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4 pb-3">
            <EachUtils
              of={anime?.data?.data}
              render={(item, i) => <CardSearch key={i} anime={item} />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeSearch;
