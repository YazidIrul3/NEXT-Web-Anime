import Image from "next/image";

const AnimeCardLoading = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-800 animate-pulse">
      <div className="relative">
        <div className=" object-cover rounded-xl 2xl:h-[300px] xl:h-[270px] lg:h-[250px] md:h-[250px] sm:h-[250px] min-h-[170px]"></div>
      </div>

      <div>
        <h1 className="text-sm font-bold"></h1>
      </div>
    </div>
  );
};

export default AnimeCardLoading;
