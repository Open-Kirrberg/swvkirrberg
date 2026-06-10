import type { NextConfig } from "next";

// Served from https://open-kirrberg.github.io/swvkirrberg/ via GitHub Pages,
// so we statically export and prefix all routes/assets with the repo name.
const basePath = process.env.NODE_ENV === "production" ? "/swvkirrberg" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages can't run the Next.js image optimizer.
  images: { unoptimized: true },
  // Avoids redirect issues for nested routes on static hosting.
  trailingSlash: true,
  // The shared design system ships as ESM/TSX that Next must transpile.
  transpilePackages: ["@mind-studio/ui"],
};

export default nextConfig;
