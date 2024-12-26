"use client";

import NotFound from "@/app/not-found";
import AnimeById from "@/components/layouts/AnimeById";
import { FetchAnime } from "@/features/anime/useFetchAnime";

const AnimeDetail = ({ id }) => {
  const {
    anime: animeDetail,
    isLoad: isLoadDetail,
    status,
  } = FetchAnime(`anime/${id}`);
  const { anime, isLoad } = FetchAnime(`anime/${id}/videos/episodes`);

  return (
    <div>
      {status === 404 ? (
        <NotFound />
      ) : (
        <AnimeById
          animeDetail={animeDetail?.data?.data}
          anime={anime}
          isLoadDetail={isLoadDetail}
          isLoad={isLoad}
          id={id}
        />
      )}
    </div>
  );
};

export default AnimeDetail;
