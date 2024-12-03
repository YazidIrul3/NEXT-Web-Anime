"use client";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import HomeLayout from "../layouts";

const HomePage = () => {
  const { anime, isLoad } = FetchAnime("anime?limit=12");
  const topAnime = FetchAnime("top/anime?limit=8");
  const loading = Array(8).fill(null);

  return (
    <HomeLayout
      anime={anime}
      topAnime={topAnime}
      loading={loading}
      isLoad={isLoad}
    />
  );
};

export default HomePage;
