import { useSuspendedQuery } from "@toss/react-query";
import { QUERY_KEYS } from "constants/queryKeys";
import { RankingItem } from "pages/StudyDetailPage/models/rankingList";
import { getRankingList } from "pages/StudyDetailPage/remotes/rankingList";

export const useGetRankingList = () => {
    return useSuspendedQuery<RankingItem[]>(QUERY_KEYS.GET_RANKING_LIST, getRankingList);
}