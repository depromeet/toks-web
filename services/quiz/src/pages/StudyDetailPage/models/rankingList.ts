import { User } from './user';

export interface RankingItemResponse {
  rankingId: number;
  ranking?: number;
  toks: number;
  user: User;
}
