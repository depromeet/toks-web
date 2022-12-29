import { User } from './user';

export type CapacityResponse = 'SMALL' | 'MEDIUM' | 'LARGE';

export interface TagResponse {
  id: number;
  name: string;
}

export interface StudyResponse {
  id: number;
  name: string;
  description: string;
  startedAt: string;
  endedAt: string;
  users: User[];
  capacity: CapacityResponse;
  tags: TagResponse[];
}
