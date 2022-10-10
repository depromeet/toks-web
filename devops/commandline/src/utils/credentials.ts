import path from 'path';

import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export function readGitHubCredentials() {
  // https://docs.github.com/en/actions/reference/environment-variables
  const {
    GITHUB_RUN_ID,
    GITHUB_SERVER_URL,
    GITHUB_API_URL,
    GITHUB_REPOSITORY,
    GITHUB_SHA,
    GITHUB_REF,
    GITHUB_HEAD_REF,
    GITHUB_BASE_REF,
    GITHUB_TOKEN,
    GITHUB_ACTOR,
  } = process.env;

  if (GITHUB_TOKEN == null) {
    throw new Error('GITHUB_TOKEN이 주어지지 않았습니다.');
  }

  return {
    url: GITHUB_SERVER_URL,
    apiUrl: GITHUB_API_URL,
    actionRunId: GITHUB_RUN_ID,
    token: GITHUB_TOKEN,
    repository: GITHUB_REPOSITORY,
    ref: GITHUB_REF,
    sha: GITHUB_SHA,
    headRef: GITHUB_HEAD_REF,
    baseRef: GITHUB_BASE_REF,
    actor: GITHUB_ACTOR,
  } as const;
}

export function readSlackCredentials() {
  const { SLACK_TOKEN } = process.env;

  if (SLACK_TOKEN == null) {
    throw new Error('SLACK_TOKEN이 주어지지 않았습니다.');
  }

  return { token: SLACK_TOKEN } as const;
}
