"use client";

import AnimeById from "@/components/layouts/AnimeById";
import { FetchAnime } from "@/features/anime/useFetchAnime";

const AnimeDetail = ({ id }) => {
  const anime2 = FetchAnime(`anime/${id}`);
  const { anime, isLoad } = FetchAnime(`anime/${id}/videos/episodes`);

  const animeDetail = anime2?.anime?.data?.data;

  return (
    <div>
      <AnimeById
        animeDetail={animeDetail}
        anime={anime}
        anime2={anime2}
        isLoad={isLoad}
        id={id}
      />
    </div>
  );
};

export default AnimeDetail;
