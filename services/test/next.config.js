/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: '/test',
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
