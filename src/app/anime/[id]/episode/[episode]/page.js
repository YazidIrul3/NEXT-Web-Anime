import AnimeByIdEpsPage from "@/pages/AnimeByIdEpsPage";

const Page = ({ params }) => {
  return <AnimeByIdEpsPage id={params?.id} episode={params?.episode} />;
};

export default Page;
