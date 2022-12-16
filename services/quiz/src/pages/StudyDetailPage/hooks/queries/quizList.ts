import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';
import { getQuizList } from 'pages/StudyDetailPage/remotes/quizList';

export const useGetQuizList = () => {
  return useSuspendedQuery<QuizResponse[]>(QUERY_KEYS.GET_QUIZ_LIST, getQuizList);
};
