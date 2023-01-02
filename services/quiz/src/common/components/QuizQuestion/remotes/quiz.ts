import { http } from '@depromeet/http';

import { QuizByIdResponse } from '../models/quiz';

export async function getQuizById(quizId: string | string[] | undefined) {
  return await http.get<QuizByIdResponse>(`/api/v1/quizzes/${quizId}`);
}
