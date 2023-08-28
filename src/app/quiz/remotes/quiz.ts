import { QuizResponse, QuizSubmitRequest } from '@/app/quiz/models/quiz';
import { http } from '@/common/utils/http';

export const getQuizDetailByQuizId = async (quizId: string) => {
  return await http.get<QuizResponse>(`api/v1/quizzes/${quizId}`);
};

export const postSubmitQuizByQuizId = async ({
  quizId,
  answer,
}: QuizSubmitRequest) => {
  return await http.post(`api/v1/quizzes/${quizId}`, { answer });
};
