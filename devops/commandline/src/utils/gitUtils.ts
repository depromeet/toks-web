import execa from 'execa';

import { ROOT_DIR } from '../constants';

interface GetCommitIdOptions {
  short?: boolean;
}

export async function getCommitId(ref: string, { short = false }: GetCommitIdOptions = {}) {
  const { stdout: commitId } = await execa('git', short ? ['rev-parse', '--short', ref] : ['rev-parse', ref], {
    cwd: ROOT_DIR,
  });

  return commitId;
}

export async function getCurrentCommitId(options?: GetCommitIdOptions) {
  return getCommitId('HEAD', options);
}

export async function getCurrentCommitMessage() {
  const { stdout: commitMessage } = await execa('git', ['log', '--format=%B', '-n', '1', 'HEAD'], {
    cwd: ROOT_DIR,
    stripFinalNewline: true,
  });

  return commitMessage;
}
