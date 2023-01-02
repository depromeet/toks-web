import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { RankResponse } from 'pages/StudyDetailPage/models/rankingList';
import { getRankingListById } from 'pages/StudyDetailPage/remotes/rankingList';

export const useGetRankingList = (studyId: string | string[] | undefined) => {
  return useQuery<RankResponse>(QUERY_KEYS.GET_RANKING_LIST, () => getRankingListById(studyId));
};
