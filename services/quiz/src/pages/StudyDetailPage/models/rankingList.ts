import { User } from '@depromeet/toks-components/src/types/user';

export interface RankResponse {
  rankingId: number;
  rank?: number;
  score: number;
  user: User;
}
