/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'source.unsplash.com',
      'k.kakaocdn.net',
      'image.tokstudy.com',
      'asset.tokstudy.com',
      'www.calliaweb.co.uk',
    ],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
