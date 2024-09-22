"use client";
import { useFetchAnime } from "@/features/anime/useFetchAnime";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import CardById from "../fragments/CardById";
import Spinner from "../fragments/Spinner";

const AnimeById = ({ id }) => {
  const anime2 = useFetchAnime(`anime/${id}`);
  const { anime, isLoad } = useFetchAnime(`anime/${id}/videos/episodes`);

  const animeDetail = anime2?.anime?.data?.data;
  console.log(animeDetail);
  console.log(anime?.data?.data);

  return (
    <div className="container mx-auto px-3 bg-slate-950 h-screen">
      {anime2?.isLoad ? (
        <div className="flex items-center justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className=" flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center gap-5">
            <Image
              className="min-w-44 min-h-44 rounded-sm"
              src={animeDetail?.images?.webp?.image_url}
              alt="anime img"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row justify-between">
                <h1 className="font-bold text-xl mb-3 text-yellow-500 mt-3">
                  {animeDetail?.title}
                </h1>
                <div className="flex flex-row items-center gap-1 px-2">
                  <div className="text-yellow-500">
                    <Star weight="fill" />
                  </div>
                  <p className="font-bold ">{animeDetail?.score}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm mt-2">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-lg">Synopsis</h1>
                  <div className="bg-slate-600 h-1 w-full"></div>
                </div>
                <p className="mt-3 text-xs font-light">
                  {animeDetail?.synopsis}
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-5">
            <h1 className="text-xl mb-3 font-bold">Episodes</h1>
            <div className="flex flex-col gap-4">
              {anime?.data?.data?.map((item, i) => {
                return <CardById key={i} anime={item} id={id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeById;
