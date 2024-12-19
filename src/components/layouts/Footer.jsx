import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-yellow-600 py-2 font-semibold">
      <h1>@ {new Date().getFullYear()} By Yazid Khairul</h1>
      <h1>
        API From{" "}
        <Link className=" text-slate-900" href={"https://jikan.moe/"}>
          JIKAN API
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
