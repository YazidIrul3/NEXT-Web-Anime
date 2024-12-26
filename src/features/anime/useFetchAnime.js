"use client";

import { axiosInstace } from "@/libs/axios";
import { useEffect, useState } from "react";

export const FetchAnime = (path, efct) => {
  const [anime, setAnime] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [status, setStatus] = useState(null);

  const getAnime = async () => {
    try {
      const response = await axiosInstace.get(path);
      setAnime(response);
      setLoad(false);
      setStatus(response.status);
    } catch (error) {
      console.log(error);
      setStatus(404);
    }
  };

  useEffect(() => {
    getAnime();
  }, [efct]);

  return {
    anime,
    isLoad,
    status,
  };
};
