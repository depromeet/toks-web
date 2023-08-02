import { QuizDetailResponse, QuizRecommendResponse } from '../models/quiz';

export const getQuizDetailByQuizId = async (quizId: string) => {
  const quizDetail: QuizDetailResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
    { next: { revalidate: 60 } }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data);
  return quizDetail;
};

export const getRecommendationByQuizId = async (quizId: string) => {
  const quizRecommendModels: QuizRecommendResponse[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/rec/quizzes?quizId=${quizId}`,
    { cache: 'force-cache' }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.quizRecommendModels);
  return quizRecommendModels;
};
