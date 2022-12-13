import { rankingList } from "mock/db";
import { RankingItem } from "../models/rankingList";

export const getRankingList = async () => {
    return await new Promise<RankingItem[]>(resolve => setTimeout(() => resolve(rankingList), 1000));
  };