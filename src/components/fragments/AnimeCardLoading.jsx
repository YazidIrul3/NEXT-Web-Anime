const AnimeCardLoading = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-800 animate-pulse">
      <div className="relative">
        <div className=" object-cover rounded-xl 2xl:h-[300px] xl:h-[225px] lg:h-[180px] md:h-[185px] sm:h-[180px] h-[200px]"></div>
      </div>

      <div>
        <h1 className="text-sm font-bold"></h1>
      </div>
    </div>
  );
};

export default AnimeCardLoading;
