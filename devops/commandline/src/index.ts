import { Cli } from 'clipanion';

import { TestCommand } from './commands/TestCommand';

const [, , ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `toks-frontend`,
  binaryName: 'toks',
});

cli.register(TestCommand);
cli.runExit(args, Cli.defaultContext);
