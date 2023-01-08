import { http } from '@depromeet/http';

import { RankResponse } from '../models/rankingList';

// export const getRankingList = () => {
//   return new Promise<RankResponse[]>(resolve => setTimeout(() => resolve(rankingList), 900));
// };

export async function getRankingListById(studyId: string) {
  return await http.get<RankResponse>(`/api/v1/quiz-ranks/studies/${studyId}`);
}
