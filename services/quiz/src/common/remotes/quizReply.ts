import { http } from '@depromeet/http';

import { QuizReplyByIdResponse } from '../models/quizReply';

export async function getQuizReplyById(quizIdParams: string | string[] | undefined) {
  return await http.get<QuizReplyByIdResponse>(`/api/v1/quiz-reply-histories/quizzes/${quizIdParams}`);
}
