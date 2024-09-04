import AnimeById from "@/components/layouts/AnimeById";

const Page = ({ params }) => {
    return <AnimeById id={params?.id} />;
}

export default Page