'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { QuizSubmitRequest } from '@/app/quiz/models/quiz';
import { postSubmitQuizByQuizId } from '@/app/quiz/remotes/quiz';

export const useSubmitQuizMutaion = () => {
  const router = useRouter();
  const { mutate: submitQuiz, isLoading } = useMutation(
    async (values: QuizSubmitRequest) => {
      try {
        await postSubmitQuizByQuizId(values);
      } finally {
        router.refresh();
      }
    }
  );

  return {
    submitQuiz,
    isLoading,
  };
};
