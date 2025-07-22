import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pakuo-WORKS',
  assetPrefix: '/pakuo-WORKS/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
