"use client";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import AnimeById from "../layouts/AnimeById";

const AnimeDetail = ({ id }) => {
  const anime2 = FetchAnime(`anime/${id}`);
  const { anime, isLoad } = FetchAnime(`anime/${id}/videos/episodes`);

  const animeDetail = anime2?.anime?.data?.data;

  return (
    <AnimeById
      animeDetail={animeDetail}
      anime={anime}
      anime2={anime2}
      isLoad={isLoad}
      id={id}
    />
  );
};

export default AnimeDetail;
