---
to: services/<%= name %>/next.config.js
---
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: '/<%= name %>',
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
