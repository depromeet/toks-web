'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { QuizResponse } from '@/app/quiz/models/quiz';
import { getQuizDetailByQuizId } from '@/app/quiz/remotes/quiz';

export const useGetQuizDetailQuery = (quizId: string) => {
  return useQuery<QuizResponse>(QUERY_KEYS.GET_QUIZ_DETAIL(quizId), () =>
    getQuizDetailByQuizId(quizId)
  );
};
