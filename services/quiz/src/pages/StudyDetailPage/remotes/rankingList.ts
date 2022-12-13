import { rankingList } from 'mock/db';

import { RankingItemResponse } from '../models/rankingList';

export const getRankingList = async () => {
  return await new Promise<RankingItemResponse[]>(resolve => setTimeout(() => resolve(rankingList), 1000));
};
