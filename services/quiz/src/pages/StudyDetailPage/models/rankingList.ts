import { User } from './user';

type Ranking = number;

export interface RankingItem {
  ranking?: Ranking;
  toks: number;
  user: User;
}
