"use client";
import { axiosInstace } from "@/libs/axios";
import { useEffect, useState } from "react";

export function useFetchAnime(path) {
  const [anime, setAnime] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const getAnime = async () => {
    try {
      const response = await axiosInstace.get(path);
      setAnime(response);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnime();
  }, []);

  return {
    anime,
    isLoad,
  };
}
