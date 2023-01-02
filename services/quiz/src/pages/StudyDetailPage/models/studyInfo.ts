import { User, TagResponse } from '@depromeet/toks-components';

export interface StudyInfo {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  tags: TagResponse[];
  users: User[];
}
