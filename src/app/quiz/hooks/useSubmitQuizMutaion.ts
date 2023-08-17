'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { QuizButtonType } from '@/app/quiz/models/quiz';
import { postSubmitQuizByQuizId } from '@/app/quiz/remotes/quiz';

export const useSubmitQuizMutaion = (quizId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: submitQuiz, isLoading } = useMutation(
    async (answer: QuizButtonType) => {
      try {
        await postSubmitQuizByQuizId({ quizId, answer });
      } finally {
        router.refresh();
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
