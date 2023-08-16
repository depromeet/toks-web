'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { QuizButtonType } from '@/app/quiz/models/quiz';
import { postSubmitQuizByQuizId } from '@/app/quiz/remotes/quiz';

export const useSubmitQuizMutaion = (
  quizId: string,
  answer: QuizButtonType
) => {
  const router = useRouter();
  const { mutate: submitQuiz, isLoading } = useMutation(async () => {
    try {
      await postSubmitQuizByQuizId(quizId, answer);
    } finally {
      router.refresh();
    }
  });

  return {
    submitQuiz,
    isLoading,
  };
};
