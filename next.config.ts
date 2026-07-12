import type { NextConfig } from "next";

const repo = "spatial-decoration-web";
const basePath =
  process.env.BASE_PATH ?? (process.env.NODE_ENV === "production" ? `/${repo}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
