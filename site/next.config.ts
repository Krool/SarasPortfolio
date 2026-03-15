import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SarasPortfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
