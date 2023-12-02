/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'source.unsplash.com',
      'toks-api-quiz-image-dev-an2.s3.ap-northeast-2.amazonaws.com',
      'k.kakaocdn.net',
      'asset.tokstudy.com',
    ],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
