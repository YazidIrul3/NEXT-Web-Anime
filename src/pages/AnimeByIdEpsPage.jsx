"use client";

import AnimeByIdAndEps from "@/components/layouts/AnimeByIdAndEps";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

const AnimeByIdEpsPage = ({ episode, id }) => {
  const anime = FetchAnime(`anime/${id}/episodes/${episode}`);
  const { anime: item } = FetchAnime(`anime/${id}/episodes/${episode}`);
  const { anime: animeEpisodes } = FetchAnime(`anime/${id}/videos/episodes`);
  const { anime: animeRecom } = FetchAnime(`anime/${id}/recommendations`);
  const { anime: animeComment } = FetchAnime(`anime/${id}/reviews?page=1`);
  const params = useParams();

  const [displayComment, setDisplayComment] = useState("block");

  return (
    <AnimeByIdAndEps
      id={id}
      params={params}
      anime={anime}
      item={item?.data?.data}
      animeEpisodes={animeEpisodes?.data?.data}
      animeComment={animeComment?.data?.data}
      animeRecom={animeRecom?.data?.data}
      review={animeComment}
      displayComment={displayComment}
    />
  );
};

export default AnimeByIdEpsPage;
