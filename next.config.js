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
        destination: "/thoughts/object-collisions-with-canvas",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
