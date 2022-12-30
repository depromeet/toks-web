import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';
import { useSuspendedQuery } from '@toss/react-query';
import { useQueryClient } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizList } from 'pages/StudyDetailPage/remotes/quizList';

export const useGetQuizList = () => {
  return useSuspendedQuery<QuizResponse[]>(QUERY_KEYS.GET_QUIZ_LIST, getQuizList).data;
};

export const useSetClientQuizList = () => {
  const queryClient = useQueryClient();
  return (state : QuizResponse[]) => queryClient.setQueryData(QUERY_KEYS.GET_QUIZ_LIST, state);
};
