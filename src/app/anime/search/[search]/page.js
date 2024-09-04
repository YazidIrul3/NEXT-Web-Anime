import AnimeSearch from "@/components/layouts/AnimeSearch";

const Page = ({ params }) => {
  return <AnimeSearch search={params.search} />;
};

export default Page;
