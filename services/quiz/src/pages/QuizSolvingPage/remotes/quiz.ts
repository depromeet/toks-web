import { http } from '@depromeet/http';

import { Quiz } from '../models/quiz';

export async function getQuizById(quizId: string | string[] | undefined) {
  return await http.get<Quiz>(`/api/v1/quizzes/${quizId}`);
}
