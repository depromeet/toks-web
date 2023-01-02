import { http } from '@depromeet/http';

import { QuizzesByIdResponse } from '../models/quizzes';

export async function getQuizzesById(quizIdParams: string | string[] | undefined) {
  return await http.get<QuizzesByIdResponse>(`/api/v1/quiz-reply-histories/quizzes/${quizIdParams}`);
}
