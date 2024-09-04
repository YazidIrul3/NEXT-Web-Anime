/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "img1.ak.crunchyroll.com",
      },
      {
        hostname: "myanimelist.net",
      },
    ],
  },
};

export default nextConfig;
