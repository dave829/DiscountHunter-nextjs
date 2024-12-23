import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tqklhszfkvzk6518638.cdn.ntruss.com",
        port: "",
        pathname: "/product/*",
      },
      {
        protocol: "http",
        hostname: "cdn2.bgfretail.com",
        port: "",
        pathname: "/bgfbrand/files/product/*",
      },
    ],
  },
};

export default nextConfig;
