import { http } from '@depromeet/http';

export async function postQuizLike(quizReplyHistoryId: number | undefined) {
  return await http.post('/api/v1/quiz-likes', quizReplyHistoryId);
}
