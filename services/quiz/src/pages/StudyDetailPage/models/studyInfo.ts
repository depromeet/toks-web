import { TagResponse, User } from '@depromeet/toks-components';

export interface StudyInfo {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  tags: TagResponse[];
  progress: ProgressStep;
  users: User[];
}

export type ProgressStep = 'STEP0' | 'STEP1' | 'STEP2' | 'STEP3' | 'STEP4' | 'STEP5';
