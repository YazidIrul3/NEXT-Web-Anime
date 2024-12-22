"use client";

import { Suspense } from "react";
import { FetchAnime } from "@/features/anime/useFetchAnime";
import { useRouter, useSearchParams } from "next/navigation";
import TopAnime from "@/components/layouts/TopAnime";

const TopAnimePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") || 1);

  const loading = Array(25).fill(null);

  const { anime, isLoad } = FetchAnime(`top/anime?page=${page}`, page);

  const handleChangePage = (page) => {
    router.push("/anime/top?page=" + page);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TopAnime
        anime={anime}
        isLoad={isLoad}
        loading={loading}
        handleChangePage={handleChangePage}
        page={page}
      />
    </Suspense>
  );
};

export default TopAnimePage;
