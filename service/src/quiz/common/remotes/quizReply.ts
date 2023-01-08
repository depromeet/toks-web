import { http } from '@depromeet/http';

import { QuizReplyByIdResponses } from '../models/quizReply';

export async function getQuizReplyById(quizIdParams: string) {
  return await http.get<QuizReplyByIdResponses>(`/api/v1/quiz-reply-histories/quizzes/${quizIdParams}`);
}
