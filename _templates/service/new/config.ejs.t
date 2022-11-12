---
to: services/<%= name %>/config.js
---
const packageDir = require('path').join(__dirname);

module.exports = require('@configs/next/config')({
  packageDir,
});
