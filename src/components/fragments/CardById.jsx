import Image from "next/image";
import Link from "next/link";

const CardById = ({ anime, id }) => {
  return (
    <Link href={`/anime/${id}/episode/${anime?.mal_id}`} className="flex gap-4">
      <div>
        <Image
          className="max-w-[150px] min-h-[80px] rounded-sm"
          src={anime?.images?.jpg?.image_url}
          alt="image anime"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-bold">{anime?.title}</h1>
        <p className="font-semibold text-xs text-blue-500">{anime?.episode}</p>
      </div>
    </Link>
  );
};

export default CardById;
