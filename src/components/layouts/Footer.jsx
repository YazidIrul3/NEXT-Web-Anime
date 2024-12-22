"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  const params = useParams();

  return (
    <footer>
      {path !== `/anime/search/${params.search}` ? (
        <div className="flex flex-col items-center justify-center bg-yellow-600 py-2 font-semibold">
          <h1>@ {new Date().getFullYear()} By Yazid Khairul</h1>
          <h1>
            API From{" "}
            <Link className=" text-slate-900" href={"https://jikan.moe/"}>
              JIKAN API
            </Link>
          </h1>
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
