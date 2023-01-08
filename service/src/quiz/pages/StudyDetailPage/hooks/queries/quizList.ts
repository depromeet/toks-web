import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';
import { useQuery, useQueryClient } from 'react-query';

import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { getQuizListById } from 'quiz/pages/StudyDetailPage/remotes/quizList';

export const useGetQuizList = (studyId: string) => {
  return useQuery<QuizResponse>(QUERY_KEYS.GET_QUIZ_LIST(studyId), () => getQuizListById(studyId));
};

export const useSetClientQuizList = (studyId: string) => {
  const queryClient = useQueryClient();
  return (state: QuizResponse) => queryClient.setQueryData(QUERY_KEYS.GET_QUIZ_LIST(studyId), state);
};
