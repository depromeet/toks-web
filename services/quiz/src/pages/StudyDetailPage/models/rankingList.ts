import { User } from '@depromeet/toks-components/src/types/user';

export type Rank = {
  rankingId: number;
  rank?: number;
  score: number;
  user: User;
};

export interface RankResponse {
  quizRanks: Rank[];
}
