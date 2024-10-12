import { useRouter } from "next/navigation";
import { Children, useEffect } from "react";

const EachUtils = ({ of, render }) => {
  const router = useRouter();

  return Children.toArray(of?.map((item, i) => render(item, i)));
};

export default EachUtils;
