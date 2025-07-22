import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 開発環境では basePath を無効にして問題を切り分け
  basePath: process.env.NODE_ENV === 'production' ? '/pakuo-WORKS' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pakuo-WORKS/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
