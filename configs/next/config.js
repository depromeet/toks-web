const path = require('path');

function createConfig({ packageDir, dotenvDir = path.join(packageDir, '.env'), extraConfig }) {
  require('dotenv').config({ path: dotenvDir });

  const env = { ...process.env };
  const { SERVICE, NODE_ENV = 'development', ENV = 'local', PORT = 3000 } = env;

  const configSkeleton = {
    SERVICE,
    ENV,
    PORT,
    NODE_ENV,
    // 우선은 false
    USE_SENTRY: false,
  };

  // TODO: Sentry Config 연결

  return withExtraConfig({ config: configSkeleton, extraConfig });
}

function withExtraConfig({ config, extraConfig }) {
  if (typeof extraConfig === 'function') {
    return extraConfig(config);
  }
  return config;
}

module.exports = createConfig;
