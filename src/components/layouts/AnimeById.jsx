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
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="font-bold text-lg mb-3">{animeDetail?.title}</h1>
            <Image
              src={animeDetail?.images?.webp?.image_url}
              alt="anime img"
              width={100}
              height={100}
            />
            <div className="flex items-center justify-center gap-1 text-sm mt-2">
              <div className="text-yellow-500">
                <Star weight="fill" />
              </div>
              <p className="font-bold ">{animeDetail?.score}</p>
            </div>
            <p className="mt-3 text-xs font-light">{animeDetail?.synopsis}</p>
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
