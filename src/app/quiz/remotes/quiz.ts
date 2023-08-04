import { QuizDetailResponse, QuizRecommendResponse } from '../models/quiz';

export const getQuizDetailByQuizId = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
    { next: { revalidate: 60 } }
  );
  const quizDetailInfo = await result.json();
  const quizDetail: QuizDetailResponse = quizDetailInfo.data;
  return quizDetail;
};

export const getRecommendationByQuizId = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/rec/quizzes?quizId=${quizId}`,
    { cache: 'force-cache' }
  );
  const quizRecommendInfo = await result.json();
  const quizRecommendModels: QuizRecommendResponse[] =
    quizRecommendInfo.data.quizRecommendModels;
  return quizRecommendModels;
};
