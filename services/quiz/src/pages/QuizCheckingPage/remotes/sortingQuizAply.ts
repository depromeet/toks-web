import { http } from '@depromeet/http';
import { QuizReplyByIdResponse } from 'common/models/quizReply';

export async function getSortedQuizReplyById(quizIdParams: string | string[] | undefined) {
  return await http.get<QuizReplyByIdResponse>(
    `/api/v1/quiz-reply-histories/quizzes/${quizIdParams}?sort=likeCount&createAt,desc`
  );
}
