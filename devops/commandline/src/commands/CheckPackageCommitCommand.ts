import { Command } from 'clipanion';

import {
  GitHubCommit,
  createPullRequestComment,
  getPullRequestCommits,
  getPullRequestNumberFromRef,
} from '../utils/githubUtils';

export class CheckPackageCommitCommand extends Command {
  static paths = [['check-package-commit']];

  async execute() {
    const pullRequestNumber = getPullRequestNumberFromRef();
    const commits = await getPullRequestCommits(pullRequestNumber);

    if (commits.length === 0) {
      throw new Error('검사할 커밋 목록이 없습니다.');
    }

    const verifiedCommit = commits.filter(commit => this.validatePackageCommit(commit));

    if (!verifiedCommit) {
      await this.reportError(pullRequestNumber);
      throw new Error('패키지 PR 제목을 확인해주세요');
    }
  }

  private validatePackageCommit(commit: GitHubCommit) {
    const commitMessage = commit.commit.message ?? '';

    const isPackageCommitLike = commitMessage?.includes('@packages') || commitMessage?.includes('@depromeet');
    if (!isPackageCommitLike) {
      return true;
    }
    /**
     * @example
     * feat(@depromeet/aaa) // true
     * fix(@depromeet/aaa) // true
     * chore(@depromeet/aaa) // false
     */
    return /(^fix|feat)(\(@depromeet\/\S+\))/.test(commitMessage);
  }

  private async reportError(pullRequestNumber: number) {
    const body = [
      '### :package: 패키지 PR 제목을 확인해주세요',
      '\n',
      '패키지를 수정했나요? feat(@packages/[패키지명]) 대신 feat(@depromeet/[패키지명]) 으로 변경해주세요.',
      '\n',
      '패키지 버전업이 필요하다면 fix(패치 버전) 또는 feat(마이너 버전) prefix를 사용해주세요.',
      '\n',
    ].join('\n');

    await createPullRequestComment({ number: pullRequestNumber, body });
  }
}
