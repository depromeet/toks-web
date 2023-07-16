/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'toks-web-assets.s3.amazonaws.com'],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
