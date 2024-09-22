import Image from "next/image";
import { useState } from "react";

const AnimeReview = ({ review }) => {
  const [line, setLine] = useState("line-clamp-3");
  const [displayComment, setDisplayComment] = useState("block");
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className=" flex gap-4 ">
        <Image
          className=" w-[50px] h-[50px] rounded-full"
          src={review?.user?.images?.webp?.image_url}
          alt="AnimeReview"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold text-slate-50">
            {review?.user?.username}
          </h1>
          <h3 className="text-xs font-light">2016-08-12</h3>
        </div>
      </div>

      <div>
        <p className={`text-xs ${line}`}>{review?.review}</p>
        <p
          onClick={() => {
            setLine("");
            setDisplayComment("hidden");
          }}
          className={` hover:cursor-pointer text-xs text-blue-400 ${displayComment}`}
        >
          Baca Selengkapnya
        </p>
      </div>
    </div>
  );
};

export default AnimeReview;
