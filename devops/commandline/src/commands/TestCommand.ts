import { Command, Option } from 'clipanion';
import execa, { ExecaError } from 'execa';
import pLimit from 'p-limit';
import stripColor from 'strip-color';

import { ROOT_DIR, TEST_SCRIPTS } from '../constants';
import {
  createPullRequestComment,
  findPullRequestAssociatedWithCommit,
  getCurrentGithubActionsURL,
} from '../utils/githubUtils';
import { getCommitId, getCurrentCommitId } from '../utils/gitUtils';
import {
  getChangedWorkspaces,
  getWorkspacePackageJson,
} from '../utils/yarnUtils';

const COMMAND_STATIC_ANALYSIS_CONCURRENCY_LIMIT = 5;
const COMMAND_TEST_CONCURRENCY_LIMIT = 3;

export class TestCommand extends Command {
  static paths = [['test']];

  readonly sinceFromRef = Option.String('-s,--since', 'origin/master');

  async execute() {
    const concurrencyStaticAnalysis = pLimit(
      COMMAND_STATIC_ANALYSIS_CONCURRENCY_LIMIT
    );
    const concurrencyTest = pLimit(COMMAND_TEST_CONCURRENCY_LIMIT);
    const sinceFromRef = await getCommitId(this.sinceFromRef);

    const workspaceLocations = await getChangedWorkspaces({
      sinceFromRef,
    });

    if (workspaceLocations.length === 0) {
      console.warn('테스트할 대상이 없습니다.');
      return;
    }

    const tests1 = workspaceLocations.map((workspaceLocation) =>
      concurrencyStaticAnalysis(() =>
        this.testWorkspace(workspaceLocation, 'static_analysis')
      )
    );
    await Promise.all(tests1);

    const tests2 = workspaceLocations.map((workspaceLocation) =>
      concurrencyTest(() => this.testWorkspace(workspaceLocation, 'test'))
    );
    await Promise.all(tests2);
  }

  private async testWorkspace(
    workspaceLocation: string,
    scriptType: 'static_analysis' | 'test'
  ) {
    const packageJson = await getWorkspacePackageJson(workspaceLocation);
    const packageScripts = Object.keys(packageJson.scripts ?? {});

    const targetScripts = packageScripts.filter((script) =>
      TEST_SCRIPTS[scriptType].includes(script)
    );

    const workspaceName = packageJson.name;
    const logPrefix = `[${workspaceName}]`;

    if (targetScripts.length === 0) {
      console.warn(logPrefix, `"${scriptType}" 스크립트가 없습니다.`);
      return;
    }

    for (const script of targetScripts) {
      await this.runWorkspaceScript(
        packageJson.name,
        workspaceLocation,
        script
      );
    }
  }

  private async runWorkspaceScript(
    workspaceName: string,
    workspaceLocation: string,
    script: string
  ) {
    const logPrefix = `[${workspaceName}]`;

    console.log(logPrefix, `"${script}" 스크립트를 실행합니다.`);

    try {
      await execa('yarn', ['workspace', workspaceName, 'run', script], {
        cwd: ROOT_DIR,
      });

      console.log(logPrefix, `"${script}"가 통과하였습니다.`);
    } catch (error) {
      console.log(logPrefix, `"${script}"가 실패하였습니다.`);

      await this.reportErrorToGitHubPullRequestComment(
        workspaceName,
        workspaceLocation,
        error as ExecaError
      );

      throw error;
    }
  }

  private async reportErrorToGitHubPullRequestComment(
    workspaceName: string,
    workspaceLocation: string,
    error: { stderr?: string; stdout?: string; shortMessage?: string }
  ) {
    const commitId = await getCurrentCommitId();
    const pullRequest = await findPullRequestAssociatedWithCommit({
      sha: commitId,
    });

    if (pullRequest != null) {
      const body = [
        '### :sob: 테스트가 실패했습니다.',
        `[GitHub Actions 확인하기](${getCurrentGithubActionsURL()})`,
        '\n',
        `- 패키지명: ${workspaceName}`,
        `- 위치: ${workspaceLocation}`,
        '\n',
        'stdout:',
        '```',
        stripColor(error.stdout || '(stdout이 비어 있습니다)'),
        '```',
        '에러 트레이스 (stderr):',
        '```',
        stripColor(
          error.stderr || error.shortMessage || '(stderr가 비어 있습니다)'
        ),
        '```',
      ].join('\n');

      await createPullRequestComment({ number: pullRequest.number, body });
    }
  }
}

/*
private validatePackageCommit(commit: GitHubCommit) {
    const commitMessage = commit.commit.message ?? '';

    const isPackageCommitLike =
      commitMessage?.includes('@packages') ||
      commitMessage?.includes('@depromeet');
    if (!isPackageCommitLike) {
      return true;
    }

    return /(^fix|feat|refactor|chore)\(\S+\)/.test(commitMessage);
  }
*/
