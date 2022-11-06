---
to: services/<%= name %>/next.config.js
---
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/<%= name %>',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
