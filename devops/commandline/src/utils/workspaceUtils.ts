import path from 'path';

import { ROOT_DIR } from '../constants';

export interface WorkspaceInfo {
  /** e.g. services/account */
  location: string;
  /** e.g. /Users/fedev1/depromeet/services/account */
  absoluteLocation: string;
  /** e.g. account */
  name: string;
}

export function parseWorkspaceInfo(workspaceDir: string) {
  const location = path.relative(ROOT_DIR, workspaceDir);

  const splits = location.split('/');
  const name = splits[splits.length - 1];

  const info: WorkspaceInfo = {
    location,
    absoluteLocation: workspaceDir,
    name,
  };

  return info;
}
