import { QuizDetailResponse, QuizRecommendResponse } from '../models/quiz';

export const getQuizDetailByQuizId = async (quizId: string) => {
  const quizDetail: QuizDetailResponse = await fetch(
    `https://api.tokstudy.com/api/v1/quizzes/${quizId}`
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data);
  return quizDetail;
};

export const getRecommendationByQuizId = async (quizId: string) => {
  const quizRecommendModels: QuizRecommendResponse[] = await fetch(
    `https://api.tokstudy.com/api/v1/rec/quizzes?quizId=${quizId}`
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.quizRecommendModels);
  return quizRecommendModels;
};
