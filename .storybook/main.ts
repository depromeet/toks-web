// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: 'storybook-addon-swc',
      options: {
        enable: process.env.BUILD_TOOL === 'swc',
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
