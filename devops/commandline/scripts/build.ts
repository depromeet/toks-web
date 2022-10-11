import path from 'path';

import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import { build as esBuild } from 'esbuild';

const ROOT = path.resolve(__dirname, '../');
const entryPoint = path.join(ROOT, 'src/index.ts');
const outfile = path.join(ROOT, 'dist/index.js');

async function build() {
  await esBuild({
    bundle: true,
    format: 'cjs',
    target: 'node16',
    platform: 'node',
    entryPoints: [entryPoint],
    outfile,
    plugins: [pnpPlugin()],
  });
}

build().catch(error => {
  console.error(error.stack);
  process.exit(1);
});
