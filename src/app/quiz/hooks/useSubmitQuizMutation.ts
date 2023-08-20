'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { QuizButtonType } from '@/app/quiz/models/quiz';
import { postSubmitQuizByQuizId } from '@/app/quiz/remotes/quiz';

export const useSubmitQuizMutation = (quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: submitQuiz, isLoading } = useMutation(
    async (answer: QuizButtonType) => {
      try {
        await postSubmitQuizByQuizId({ quizId, answer });
      } catch {
        throw new Error('퀴즈 제출 요청에 실패하였습니다.');
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.GET_QUIZ_DETAIL(quizId));
      },
    }
  );

  return {
    submitQuiz,
    isLoading,
  };
};
