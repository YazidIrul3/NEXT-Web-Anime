import AnimeByIdEpsPage from "@/pages/AnimeByIdEpsPage";

const Page = ({ params }) => {
  return <AnimeByIdEpsPage episode={params?.episode} id={params?.id} />;
};

export default Page;
