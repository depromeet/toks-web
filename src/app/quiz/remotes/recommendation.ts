import { QuizRecommendModel } from '../models/recommendation';

export const getRecommendationByQuizId = async (quizId: string) => {
  const quizRecommendModels: QuizRecommendModel[] = await fetch(
    `https://api.tokstudy.com/api/v1/rec/quizzes?quizId=${quizId}`
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.quizRecommendModels);
  return quizRecommendModels;
};
