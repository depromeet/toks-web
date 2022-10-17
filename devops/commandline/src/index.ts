import { Cli } from 'clipanion';

import { CheckPackageCommitCommand } from './commands/CheckPackageCommitCommand';
import { TestCommand } from './commands/TestCommand';

const [, , ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `depromeet 5th team`,
  binaryName: 'depromeet',
});

cli.register(TestCommand);
cli.register(CheckPackageCommitCommand);
cli.runExit(args, Cli.defaultContext);
