/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: '/quiz',
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
