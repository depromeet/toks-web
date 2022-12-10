const path = require('path');
const { spawnSync } = require('child_process');

// NOTE: '__dirname'이 yarn v2 virtual 경로로 잡히므로 실제 경로로 변환해줍니다.
const ROOT_PATH = path.resolve(__dirname, '..', '..');
const envs = require('@configs/next/config')({ packageDir: __dirname });
const publicRuntimeConfig = createRuntimeConfig(envs);
const { NODE_ENV, ENV, ...publicRuntimeConfigWithoutNodeEnv } = publicRuntimeConfig;
const babelLoaderTargetLocations = getBabelLoaderTargetLocations(__dirname);

/** @type {import('next').NextConfig} */
// TODO: 센트리 Config 연결
module.exports = {
  basePath: '/login',
  experimental: {
    scrollRestoration: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  output: 'standalone',
  env: publicRuntimeConfigWithoutNodeEnv,
  publicRuntimeConfig,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.unshift({
      test: /\.tsx?$/,
      include: filePath => {
        // NOTE: 모노레포 내에 있는 패키지를 사용하는 경우, babel-loader를 사용하도록 합니다.
        return babelLoaderTargetLocations.some(x => filePath.includes(x));
      },
      loader: 'next-swc-loader',
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

function createRuntimeConfig(config) {
  const properties = [
    'ENV',
    'NODE_ENV',
    'BASE_URL',
    'ASSET_PREFIX',
    'PORT',
    'GOOGLE_ANALYTICS_ID',
    'VERSION',
    'SERVICE',
    'SERVICE_VERSION',
    'RENDER_TYPE',
  ];

  return Object.keys(config).reduce((acc, currKey) => {
    if (properties.includes(currKey)) {
      acc[currKey] = config[currKey];
    }

    return acc;
  }, {});
}

function getBabelLoaderTargetLocations(currentServiceLocation) {
  const { stdout } = spawnSync('yarn', ['workspaces', 'list', '--json'], {
    cwd: ROOT_PATH,
    encoding: 'utf8',
  });

  /**
   * @type {{ location: string, name: string }[]}
   */
  const workspaces = stdout
    .split('\n')
    .filter(val => val !== '')
    .map(val => JSON.parse(val));

  return (
    workspaces
      // 루트 워크스페이스는 제외합니다.
      .filter(workspace => workspace.location !== '.')
      // 현재 서비스 프로젝트는 제외합니다.
      .filter(workspace => workspace.location !== currentServiceLocation)
      .map(workspace => workspace.location)
  );
}
