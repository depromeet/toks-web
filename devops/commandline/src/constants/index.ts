import path from 'path';

export const ROOT_DIR = path.resolve(__dirname, '../../../');

export const TEST_SCRIPTS = {
  static_analysis: ['typecheck', 'lint', 'find-deadcode'],
  test: ['test'],
};
