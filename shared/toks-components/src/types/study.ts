import { User } from './user';

export type CapacityResponse = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface TagResponse {
  id: number;
  name: string;
}

export interface StudyEnterResponse {
  id: number;
  name: string;
  description: string;
  startedAt: Date;
  endedAt: Date;
  capacity: CapacityResponse;
  tags: TagResponse[];
}

export interface StudyDetailResponse {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  users: User[];
  latestQuizRound: number;
  tags: TagResponse[];
}
