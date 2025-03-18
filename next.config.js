/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this to generate RSS feed during build
  async rewrites() {
    return [
      {
        source: "/feed",
        destination: "/rss.xml",
      },
    ];
  },
};

module.exports = nextConfig;
