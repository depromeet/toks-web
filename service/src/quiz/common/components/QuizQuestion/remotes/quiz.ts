import { http } from '@depromeet/http';

import { QuizByIdResponse } from '../models/quiz';

export async function getQuizById(quizId: string) {
  return await http.get<QuizByIdResponse>(`/api/v1/quizzes/${quizId}`);
}
