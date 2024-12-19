"use client";

import HomeLayout from "@/components/layouts";
import Footer from "@/components/layouts/Footer";
import { FetchAnime } from "@/features/anime/useFetchAnime";

const HomePage = () => {
  const { anime, isLoad } = FetchAnime("anime?limit=12");
  const topAnime = FetchAnime("top/anime?limit=8");
  const loading = Array(8).fill(null);

  return (
    <div>
      <HomeLayout
        anime={anime}
        topAnime={topAnime}
        loading={loading}
        isLoad={isLoad}
      />
      <Footer />
    </div>
  );
};

export default HomePage;