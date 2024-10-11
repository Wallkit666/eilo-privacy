/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://strapi.a-bots.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.a-bots.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
