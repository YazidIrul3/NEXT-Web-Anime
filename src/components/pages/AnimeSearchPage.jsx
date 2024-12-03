'use client'

import { FetchAnime } from "@/features/anime/useFetchAnime";
import AnimeSearch from "../layouts/AnimeSearch";

const AnimeSearchPage = ({ search }) => {
  const { anime, isLoad } = FetchAnime(`anime?q=${search}`);
  const { anime2, isLoad2 } = FetchAnime(`anime?q=${search}`);

  return <AnimeSearch anime={anime} anime2={anime2} isLoad={isLoad} />
};

export default AnimeSearchPage;
