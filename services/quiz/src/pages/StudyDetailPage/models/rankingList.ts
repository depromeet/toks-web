import { User } from './user';

export interface RankResponse {
  rankingId: number;
  score: number;
  user: User;
}
