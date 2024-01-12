import { QuizRecommendResponse } from '@/app/(BackHeader)/quiz/models/quiz';

export const getRecommendationByQuizId = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/rec/quizzes?quizId=${quizId}`,
    {
      cache: 'no-cache',
    }
  );
  const quizRecommendInfo = await result.json();
  const quizRecommendModels: QuizRecommendResponse[] =
    quizRecommendInfo.data.quizRecommendModels;
  return quizRecommendModels;
};
