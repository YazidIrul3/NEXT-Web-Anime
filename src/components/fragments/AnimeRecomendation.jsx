import Image from "next/image";
import Link from "next/link";

const AnimeRecomandaton = ({anime, id}) => {
  return (
    <Link href={`/anime/${id}/episode/${anime?.entry?.mal_id}`} className="flex gap-4">
      <div>
        <Image
          className="max-w-[100px] min-h-[50px] rounded-sm"
          src={anime?.entry?.images?.jpg?.image_url}
          alt="image anime"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-bold">{anime?.entry?.title}</h1>
        <p className="font-semibold text-xs text-slate-50"><span className=" text-yellow-500">{anime?.votes}</span> Votes</p>
      </div>
    </Link>
  );
};

export default AnimeRecomandaton;
