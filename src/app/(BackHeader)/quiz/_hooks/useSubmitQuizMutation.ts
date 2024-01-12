'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/(BackHeader)/quiz/constants/queryKeys';
import { QuizButtonType } from '@/app/(BackHeader)/quiz/models/quiz';
import { postSubmitQuizByQuizId } from '@/app/(BackHeader)/quiz/remotes/quiz';

export const useSubmitQuizMutation = (quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: submitQuiz, isPending } = useMutation({
    mutationFn: async (answer: QuizButtonType) => {
      try {
        await postSubmitQuizByQuizId({ quizId, answer });
      } catch {
        throw new Error('퀴즈 제출 요청에 실패하였습니다.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.GET_QUIZ_DETAIL(quizId),
      });
    },
  });

  return {
    submitQuiz,
    isLoading: isPending,
  };
};
