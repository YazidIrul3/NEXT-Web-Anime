import AnimeDetail from "@/pages/AnimeDetail";

const Page = ({ params }) => {
  return <AnimeDetail id={params?.id} />;
};

export default Page;
