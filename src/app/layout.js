import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JIKAN UNOFFICIAL",
  description: "i make this website with next js and API from JIKAN API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className=" bg-slate-950 text-slate-50 pb-5 min-h-screen overflow-y-scroll scrollbar-none">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
