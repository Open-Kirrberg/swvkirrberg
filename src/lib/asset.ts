// Prefixes a public-folder path with the deployment basePath so static assets
// (images, PDFs) resolve under GitHub Pages' /swvkirrberg/ subpath. next/image's
// loader and plain <a href> don't apply basePath to string srcs, so do it here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
