import { User } from './user';

export interface RankingItem {
  ranking?: number;
  toks: number;
  user: User;
}
