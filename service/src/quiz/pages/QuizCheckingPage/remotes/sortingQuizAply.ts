import { http } from '@depromeet/http';

import { QuizReplyByIdResponses } from 'quiz/common/models/quizReply';

export async function getSortedQuizReplyById(quizIdParams: string | string[] | undefined) {
  return await http.get<QuizReplyByIdResponses>(
    `/api/v1/quiz-reply-histories/quizzes/${quizIdParams}?sort=likeCount,desc&sort=createdAt,asc`
  );
}
