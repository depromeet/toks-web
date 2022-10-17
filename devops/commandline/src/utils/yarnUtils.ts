import path from 'path';

import execa from 'execa';
import { readJson } from 'fs-extra';
import minimatch from 'minimatch';

import { ROOT_DIR } from '../constants';

interface GetChangedWorkspacesOptions {
  sinceFromRef: string;
  includes?: string | string[];
}

export async function getChangedWorkspaces({ sinceFromRef, includes = '**' }: GetChangedWorkspacesOptions) {
  const includesGlob = parseGlobValue(includes);

  const { stdout } = await execa('yarn', ['workspaces', 'since', 'list', sinceFromRef], {
    cwd: ROOT_DIR,
    stripFinalNewline: true,
  });

  return stdout.split('\n').filter(location => minimatch(location, includesGlob));
}

export async function getWorkspacePackageJson(workspaceLocation: string) {
  const packageJsonPath = path.join(ROOT_DIR, workspaceLocation, 'package.json');
  const packageJson: {
    name: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
  } = await readJson(packageJsonPath, {
    throws: true,
  });

  return packageJson;
}

function parseGlobValue(globLike: string | string[]) {
  if (Array.isArray(globLike)) {
    return globLike.length > 1 ? `{${globLike.join(',')}}` : globLike[0];
  }

  return globLike;
}
