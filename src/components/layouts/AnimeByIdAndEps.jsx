"use client";
import CardById from "../fragments/CardById";
import AnimeReview from "../fragments/AnimeReview";
import AnimeRecomandaton from "../fragments/AnimeRecomendation";
import Spinner from "../fragments/Spinner";
import EachUtils from "@/utils/Eachutils";
import VideoPlayer from "@/utils/VideoPlayer";

const AnimeByIdAndEps = ({
  anime,
  id,
  anime2,
  animeRecommendations,
  review,
  displayComment,
  item,
  animeEpisodes,
  animeRecom,
  animeComment,
}) => {
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
            </div>

            <div className="flex flex-col 2xl:w-2/6 xl:w-2/6 lg:w-2/6 w-full gap-7 ">
              <h1 className="text-lg mt-2 font-bold">Recommendation</h1>

              <div className="flex flex-col gap-4 h-[500px] overflow-y-scroll scrollbar-none">
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
