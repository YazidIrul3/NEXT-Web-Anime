import TopAnimePage from "@/pages/TopAnimePage";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <TopAnimePage />
    </Suspense> 
  );
};

export default Page;
