const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect old /portfolio/* URLs to /projects (permanent 301)
      {
        source: "/portfolio",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/portfolio/:slug",
        destination: "/projects",
        permanent: true,
      },
      // Strip legacy ?liquid-header=dark-header query param (old WordPress theme)
      {
        source: "/",
        has: [{ type: "query", key: "liquid-header" }],
        destination: "/",
        permanent: true,
      },
      // Redirect old WordPress category/tag URLs to /blog
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
      // Redirect old WordPress post/page URLs if any
      {
        source: "/wp-content/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(
      __dirname,
      "src/lib/react-router-dom-shim.js"
    );
    return config;
  },
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
