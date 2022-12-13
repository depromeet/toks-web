import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { QuizItem } from 'pages/StudyDetailPage/models/quizList';
import { getQuizList } from 'pages/StudyDetailPage/remotes/quizList';

export const useGetQuizList = () => {
  return useSuspendedQuery<QuizItem[]>(QUERY_KEYS.GET_QUIZ_LIST, getQuizList);
};
