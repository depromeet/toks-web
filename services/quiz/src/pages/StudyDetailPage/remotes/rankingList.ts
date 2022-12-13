import { rankingList } from 'mock/db';

import { RankingItemResponse } from '../models/rankingList';

export const getRankingList = () => {
  return new Promise<RankingItemResponse[]>(resolve => setTimeout(() => resolve(rankingList), 1000));
};
