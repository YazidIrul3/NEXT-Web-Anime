"use client";

import AnimeByIdAndEps from "@/components/layouts/AnimeByIdAndEps";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import { useState } from "react";

const AnimeByIdEpsPage = ({ episode, id }) => {
  const anime = FetchAnime(`anime/${id}/episodes/${episode}`);
  const anime2 = FetchAnime(`anime/${id}/videos/episodes`);
  const animeRecommendations = FetchAnime(`anime/${id}/recommendations`);
  const review = FetchAnime(`anime/${id}/reviews?page=1`);

  const [displayComment, setDisplayComment] = useState("block");

  const item = anime?.anime?.data?.data;
  const animeEpisodes = anime2?.anime?.data?.data;
  const animeRecom = animeRecommendations?.anime?.data?.data;
  const animeComment = review?.anime?.data?.data;

  return (
    <AnimeByIdAndEps
      id={id}
      anime={anime}
      anime2={anime2}
      item={item}
      animeEpisodes={animeEpisodes}
      animeComment={animeComment}
      animeRecom={animeRecom}
      animeRecommendations={animeRecommendations}
      review={review}
      displayComment={displayComment}
    />
  );
};

export default AnimeByIdEpsPage;
