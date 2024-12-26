"use client";

import NotFound from "@/app/not-found";
import AnimeByIdAndEps from "@/components/layouts/AnimeByIdAndEps";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import { notFound, useParams, useRouter } from "next/navigation";
import { useState } from "react";

const AnimeByIdEpsPage = ({ episode, id }) => {
  const anime = FetchAnime(`anime/${id}/episodes/${episode}`);
  const { anime: item, isLoad: itemIsLoad } = FetchAnime(
    `anime/${id}/episodes/${episode}`
  );
  const {
    anime: animeEpisodes,
    isLoad: animeEpisodesIsLoad,
    status,
  } = FetchAnime(`anime/${id}/videos/episodes`);
  const { anime: animeRecom, isLoad: animeRecomIsLoad } = FetchAnime(
    `anime/${id}/recommendations`
  );
  const { anime: animeComment, isLoad: animeCommentIsLoad } = FetchAnime(
    `anime/${id}/reviews?page=1`
  );
  const params = useParams();

  const [displayComment, setDisplayComment] = useState("block");

  return (
    <div>
      {anime?.anime?.data?.data?.title == "" || status === 404 ? (
        <NotFound />
      ) : (
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
          itemIsLoad={itemIsLoad}
          animeEpisodesIsLoad={animeEpisodesIsLoad}
          animeRecomIsLoad={animeRecomIsLoad}
          animeCommentIsLoad={animeCommentIsLoad}
          setDisplayComment={setDisplayComment}
        />
      )}
    </div>
  );
};

export default AnimeByIdEpsPage;
