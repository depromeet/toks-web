import { User } from './user';

export interface RankingItem {
  rankingId: number
  ranking?: number;
  toks: number;
  user: User;
}
