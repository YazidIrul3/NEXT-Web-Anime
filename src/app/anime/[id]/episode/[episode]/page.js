import AnimeByIdAndEps from "@/components/layouts/AnimeByIdAndEps";

const Page = ({ params }) => {
  return <AnimeByIdAndEps id={params?.id} episode={params?.episode} />;
};

export default Page