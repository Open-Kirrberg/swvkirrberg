import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shared design system ships as ESM/TSX that Next must transpile.
  transpilePackages: ["@mind-studio/ui"],
};

export default nextConfig;
