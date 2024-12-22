"use client";

import AnimeById from "@/components/layouts/AnimeById";
import { FetchAnime } from "@/features/anime/useFetchAnime";

const AnimeDetail = ({ id }) => {
  const { anime: animeDetail, isLoad: isLoadDetail } = FetchAnime(
    `anime/${id}`
  );
  const { anime, isLoad } = FetchAnime(`anime/${id}/videos/episodes`);

  return (
    <div>
      <AnimeById
        animeDetail={animeDetail?.data?.data}
        anime={anime}
        isLoadDetail={isLoadDetail}
        isLoad={isLoad}
        id={id}
      />
    </div>
  );
};

export default AnimeDetail;
