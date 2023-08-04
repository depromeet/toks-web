/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'source.unsplash.com',
      'toks-web-assets.s3.amazonaws.com',
      'toks-api-quiz-image-dev-an2.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
