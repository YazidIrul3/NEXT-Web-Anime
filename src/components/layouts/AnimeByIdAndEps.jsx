"use client";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import CardById from "../fragments/CardById";
import { useParams, usePathname } from "next/navigation";
import AnimeReview from "../fragments/AnimeReview";
import AnimeRecomandaton from "../fragments/AnimeRecomendation";
import { useState } from "react";
import Spinner from "../fragments/Spinner";
import EachUtils from "@/utils/Eachutils";
import VideoPlayer from "@/utils/VideoPlayer";

const AnimeByIdAndEps = ({ episode, id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const anime = FetchAnime(`anime/${id}/episodes/${episode}`);
  const anime2 = FetchAnime(`anime/${id}/videos/episodes`);
  const animeRecommendations = FetchAnime(`anime/${id}/recommendations`);
  const review = FetchAnime(
    `anime/${id}/reviews?page=${currentPage}`,
    currentPage
  );
  const animeVideo = FetchAnime(`anime/${id}/videos`);

  const [displayComment, setDisplayComment] = useState("block");

  const path = usePathname();
  const pathname = path.split("/")[4];

  const item = anime?.anime?.data?.data;
  const animeEpisodes = anime2?.anime?.data?.data;
  const animeRecom = animeRecommendations?.anime?.data?.data;
  const animeComment = review?.anime?.data?.data;
  const video = item?.url?.replace("http://", "https://");

  console.log(item);

  return (
    <div className="container mx-auto bg-slate-950 h-screen px-3 ">
      {anime?.isLoad ? (
        <div className="flex items-center justify-center mt-2">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col gap-4">
            <div className="py-4 w-11/12">
              <div className="w-full">
                {/* <video
                  controls
                  className="w-screen h-full"
                  preload="none"
                >
                  <source
                    src=".../assets/videos/video.mp4"
                    type="video/mp4"
                  />
                  <track
                    src="../assets/videos/video.mp4"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                </video> */}

                <VideoPlayer
                  url={"https://youtu.be/o3C8yFMHyJQ?si=z3wOo-1jb2SvOVUU"}
                />
              </div>

              <div>
                <h1 className="text-lg mt-2 font-bold">{item?.title}</h1>
              </div>
            </div>

            <div className=" h-[500px] overflow-y-scroll 2xl:w-3/6 xl:w-3/6 lg:w-3/6 w-full scrollbar-none">
              <h1 className="text-lg mb-3 font-bold">Other Episodes</h1>
              <div className="flex flex-col gap-4">
                <EachUtils
                  of={animeEpisodes}
                  render={(item, i) => <CardById anime={item} />}
                />
              </div>
            </div>
          </div>

          <div
            className="mt-11 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col w-full gap-5 pb-4"
            id="comment"
          >
            <div className="flex flex-col gap-7 2xl:w-5/6 xl:w-5/6 lg:w-5/6 w-full">
              <h1 className="text-lg mt-2 font-bold">COMMENTS</h1>

              <div className="flex flex-col gap-4">
                {review?.isLoad ? (
                  <div className="flex items-center justify-center mt-2">
                    <Spinner />
                  </div>
                ) : (
                  <EachUtils
                    of={animeComment}
                    render={(anime, i) => (
                      <AnimeReview
                        key={i}
                        review={anime}
                        comment={displayComment}
                      />
                    )}
                  />
                )}
              </div>

              <div className="flex flex-row items-center justify-center gap-4">
                {currentPage > 1 && (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                      setDisplayComment("block");
                    }}
                    className=" bg-blue-800 font-bold text-slate-50 text-lg px-3 py-1"
                  >
                    Back
                  </button>
                )}

                {review?.anime?.data?.pagination?.has_next_page && (
                  <a
                    href="#comment"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className=" bg-blue-800 font-bold text-slate-50 text-lg px-3 py-1"
                  >
                    Next
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-col 2xl:w-2/6 xl:w-2/6 lg:w-2/6 w-full gap-7 ">
              <h1 className="text-lg mt-2 font-bold">Recommendation</h1>

              <div className="flex flex-col gap-4 h-72 overflow-y-scroll scrollbar-none">
                {animeRecom?.map((anime, i) => (
                  <AnimeRecomandaton anime={anime} id={id} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeByIdAndEps;
