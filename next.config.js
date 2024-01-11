/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'source.unsplash.com',
      'k.kakaocdn.net',
      'image.tokstudy.com',
      'asset.tokstudy.com',
    ],
  },
  eslint: {
    dirs: ['src'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
