import { Cli } from 'clipanion';

import { TestCommand } from './commands/TestCommand';

const [, , ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `depromeet 5th team`,
  binaryName: 'depromeet',
});

cli.register(TestCommand);
cli.runExit(args, Cli.defaultContext);
