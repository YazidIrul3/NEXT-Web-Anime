import { Heart, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const TopAnimeCard = ({ anime, i }) => {
  return (
    <Link
      href={`/anime/${anime?.mal_id}`}
      className="flex gap-4 p-2 hover:bg-slate-900 hover:bg-opacity-50"
    >
      <div>
        <Image
          className="max-w-[75px] h-[100px] rounded-sm"
          src={anime?.images?.webp?.image_url}
          alt="image anime"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col ">
        <h1 className="text-lg font-bold text-yellow-400">{anime?.title}</h1>
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center gap-1">
            <div className=" font-bold text-yellow-500">
              <Star weight="fill" />
            </div>
            <h1 className="font-semibold text-sm text-slate-50">
              {anime?.score}{" "}
            </h1>
          </div>

          <div className="flex items-center gap-1">
            <div className="font-bold text-red-500">
              <Heart weight="fill" />
            </div>
            <h1 className="font-semibold text-sm">{anime?.favorites}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopAnimeCard;
