// Unhashed files in public/ default to max-age=0 on Vercel, so every repeat
// visit revalidates them. Let browsers reuse them for a day, and serve stale
// copies for a week while revalidating in the background.
const publicAssetCacheControl =
  "public, max-age=86400, stale-while-revalidate=604800";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/understanding-the-power-of-lisp",
        destination: "/thoughts/understanding-the-power-of-lisp",
        permanent: true,
      },
      {
        source: "/building-this-website",
        destination: "/thoughts/building-this-website",
        permanent: true,
      },
      {
        source: "/object-collisions-with-canvas",
        destination: "/thoughts/simulating-object-collisions",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      "/favicon/:path*",
      "/images/:path*",
      "/videos/:path*",
      "/checkers/:path*",
      "/tic-tac-toe/:path*",
      "/reports/:path*",
      "/logo.png",
    ].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: publicAssetCacheControl }],
    }));
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // The stylesheet is small, so inlining it saves a render-blocking request.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

module.exports = nextConfig;
