const config = require('./index');

config.presets.unshift(require.resolve('next/babel'));

module.exports = config;
