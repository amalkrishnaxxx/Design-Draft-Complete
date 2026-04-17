/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // turbopack: {
  //   resolveAlias: {
  //     "react-router-dom": "./src/lib/react-router-dom-shim.js",
  //   },
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

module.exports = nextConfig;
