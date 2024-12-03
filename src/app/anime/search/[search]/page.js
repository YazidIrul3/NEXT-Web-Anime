import AnimeSearchPage from "@/components/pages/AnimeSearchPage";

const Page = ({ params }) => {
  return <AnimeSearchPage search={params.search} />;
};

export default Page;
