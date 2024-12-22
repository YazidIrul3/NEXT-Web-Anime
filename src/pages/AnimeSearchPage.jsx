"use client";

import AnimeSearch from "@/components/layouts/AnimeSearch";
import { FetchAnime } from "@/features/anime/useFetchAnime";

const AnimeSearchPage = ({ search }) => {
  const { anime, isLoad } = FetchAnime(`anime?q=${search}`);

  return <AnimeSearch anime={anime} isLoad={isLoad} />;
};

export default AnimeSearchPage;
