"use client";
import { useFetchAnime } from "@/features/anime/useFetchAnime";
import CardById from "../fragments/CardById";
import { useParams, usePathname } from "next/navigation";
import AnimeReview from "../fragments/AnimeReview";
import AnimeRecomandaton from "../fragments/AnimeRecomendation";

const AnimeByIdAndEps = ({ episode, id }) => {
  const anime = useFetchAnime(`anime/${id}/episodes/${episode}`);
  const anime2 = useFetchAnime(`anime/${id}/videos/episodes`);
  const animeRecommendations = useFetchAnime(`anime/${id}/recommendations`);
  const review = useFetchAnime(`anime/${id}/reviews`);
  const animeVideo = useFetchAnime(`anime/${id}/videos`);

  const path = usePathname();
  const pathname = path.split("/")[4];

  const item = anime?.anime?.data?.data;
  const animeEpisodes = anime2?.anime?.data?.data;
  const animeRecom = animeRecommendations?.anime?.data?.data;
  const animeComment = review?.anime?.data?.data;
  const video = animeVideo?.anime?.data?.data?.music_videos[0]?.video?.embed_url;

  console.log(animeRecom);
  

  // console.log(item);
  

  return (
    <div className="container mx-auto bg-slate-950 h-screen px-3">
      <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-4">
        <div className="py-4">
          <div>
            <video
              controls
              src={video}
              type="video/mp4"
              className="w-screen h-full"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div>
            <h1 className="text-lg mt-2 font-bold">{item?.title}</h1>
          </div>
        </div>

        <div className=" h-[500px] overflow-y-scroll 2xl:w-3/6 xl:w-3/6 lg:w-3/6 w-full scrollbar-none">
          <h1 className="text-lg mb-3 font-bold">Other Episode</h1>
          <div className="flex flex-col gap-4">
            {animeEpisodes?.map((anime, i) => (
              <div
                key={i}
                className={`w-full p-2 rounded-md ${
                  pathname == anime?.mal_id ? "bg-slate-900" : ""
                }`}
              >
                <CardById anime={anime} id={id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-11 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col w-full gap-5">
        <div className="flex flex-col gap-7 w-5/6">
          <h1 className="text-lg mt-2 font-bold">
            Reviews {animeComment?.length}
          </h1>

          <div className="flex flex-col gap-4">
            {animeComment?.map((anime, i) => (
              <AnimeReview key={i} review={anime} />
            ))}
          </div>
        </div>

        <div className="flex flex-col 2xl:w-2/6 xl:w-2/6 lg:w-2/6 w-full gap-7 ">
          <h1 className="text-lg mt-2 font-bold">Recommendation</h1>

          <div className="flex flex-col gap-4 ">
            {animeRecom?.map((anime, i) => (
              <AnimeRecomandaton anime={anime} id={id} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeByIdAndEps;
