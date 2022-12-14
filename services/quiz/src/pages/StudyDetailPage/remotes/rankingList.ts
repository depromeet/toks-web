import { rankingList } from 'mock/db';

import { RankResponse } from '../models/rankingList';

export const getRankingList = () => {
  return new Promise<RankResponse[]>(resolve => setTimeout(() => resolve(rankingList), 1000));
};
