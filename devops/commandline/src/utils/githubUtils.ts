import axios, { AxiosInstance } from 'axios';

import { readGitHubCredentials } from './credentials';

let api: AxiosInstance | null = null;

function getApiInstance(): AxiosInstance {
  if (api == null) {
    const { apiUrl, token } = readGitHubCredentials();

    api = axios.create({
      baseURL: apiUrl,
      auth: {
        username: 'linegu',
        password: token,
      },
    });
  }

  return api;
}

export function getPullRequestNumberFromRef() {
  const { ref = '' } = readGitHubCredentials();
  const [, number] = ref.match(/refs\/pull\/(\d+)\/merge/) ?? [];

  if (number == null) {
    throw new Error(`잘못된 ref 포맷: ${ref}`);
  }

  return Number(number);
}

export async function createPullRequestComment({ number, body }: { number: number; body: string }) {
  const { repository } = readGitHubCredentials();
  const {
    data: { id },
  } = await getApiInstance().post(`/repos/${repository}/issues/${number}/comments`, {
    body,
  });

  return id;
}

export type GitHubPullRequest = {
  title: string;
  number: number;
  commits_url: string;
};

export async function getPullRequest(pullRequestNumber: number) {
  const { repository } = readGitHubCredentials();
  const { data: pullRequest } = await getApiInstance().get<GitHubPullRequest>(
    `/repos/${repository}/pulls/${pullRequestNumber}`
  );

  return pullRequest;
}

export type GitHubCommit = {
  html_url: string;
  sha: string;
  commit: {
    message?: string;
    author?: {
      name: string;
      email: string;
    };
  };
};

export async function getPullRequestCommits(pullRequestNumber: number) {
  const { repository } = readGitHubCredentials();
  const { data: commits } = await getApiInstance().get<GitHubCommit[]>(
    `/repos/${repository}/pulls/${pullRequestNumber}/commits`
  );

  return commits;
}

export async function findPullRequestAssociatedWithCommit({ sha }: { sha: string }) {
  const { repository } = readGitHubCredentials();
  const { data: pullRequests } = await getApiInstance().get<GitHubPullRequest[]>(`/repos/${repository}/pulls`);

  const commitsByPullRequestIdPromise = pullRequests.map(async pr => {
    const commits = await getPullRequestCommits(pr.number);

    return {
      title: pr.title,
      number: pr.number,
      commits,
    };
  });

  const commitsByPullRequestId = await Promise.all(commitsByPullRequestIdPromise);

  return commitsByPullRequestId.find(({ commits }) => {
    return commits.some(commit => commit.sha === sha || commit.sha.includes(sha));
  });
}

export function getCurrentGithubActionsURL() {
  const { url, repository, actionRunId } = readGitHubCredentials();

  return `${url}/${repository}/actions/runs/${actionRunId}`;
}

export function getPullRequestBaseRef() {
  return readGitHubCredentials().baseRef as string;
}

export interface GitHubPullRequestInfoFromCommitMessage {
  number: string;
  url: string;
  title: string;
}

export function parseGitHubPullRequestInfoFromCommitMessage(commitMessage: string) {
  const result = commitMessage.match(/\(#(\d+)\)/);
  const [, number] = result ?? [];

  if (result == null || number == null) {
    throw new Error('커밋메시지에서 PullRequest 정보를 파싱할 수 없습니다.');
  }

  const { url, repository } = readGitHubCredentials();

  return {
    number,
    url: `${url}/${repository}/pull/${number}`,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    title: commitMessage.slice(0, result.index! - 1).replace(/\n/g, ''),
  } as const;
}

export function parseGitHubPullRequestInfoFromCommitMessageSafely(commitMessage: string) {
  try {
    return parseGitHubPullRequestInfoFromCommitMessage(commitMessage);
  } catch {
    return null;
  }
}
