import AnimeByIdEpsPage from "@/pages/AnimeByIdEpsPage";

const Page = ({ params }) => {
  return <AnimeByIdEpsPage episode={params?.episodes} id={params?.id} />;
};

export default Page;
