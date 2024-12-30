import EachUtils from "@/utils/Eachutils";
import CardTopAnime from "../fragments/CardTopAnime";
import AnimeTopCardLoading from "../fragments/TopAnimeCardLoading";

const TopAnime = ({ anime, isLoad, loading, page, handleChangePage }) => {
  return (
    <div>
      <div className="2xl:container mx-auto p-5 bg-slate-950 h-full min-h-screen ">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold">Top Anime</h1>
        </div>
        {isLoad ? (
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 py-2 grid-cols-3 gap-4">
            {loading.map((_, i) => {
              return <AnimeTopCardLoading key={i} />;
            })}
          </div>
        ) : (
          <div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 py-2 grid-cols-3 gap-4">
              <EachUtils
                of={anime?.data?.data}
                render={(item, i) => <CardTopAnime key={i} anime={item} />}
              />
            </div>

            <div className="flex items-center justify-center gap-5 py-7">
              <button
                onClick={() => handleChangePage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-500 text-slate-50 font-bold rounded-lg hover:bg-blue-700"
              >
                -
              </button>

              <p>{page}</p>

              <button
                onClick={() => handleChangePage(page + 1)}
                disabled={page === anime?.data?.pagination?.last_visible_page}
                className="px-4 py-2 bg-blue-500 text-slate-50 font-bold rounded-lg hover:bg-blue-700"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopAnime;
