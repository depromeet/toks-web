module.exports = {
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('@babel/preset-react'),
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-lodash'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
    require.resolve('@babel/plugin-proposal-numeric-separator'),
    require.resolve('@emotion/babel-plugin'),
  ],
};
