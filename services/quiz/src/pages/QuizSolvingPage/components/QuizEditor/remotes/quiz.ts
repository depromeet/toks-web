import { http } from '@depromeet/http';
import { QuizAnswerRequest } from '../models/quiz';

export async function postQuizAnswer(quizAnswer: QuizAnswerRequest) {
  return await http.post('/api/v1/quiz-reply-histories', quizAnswer);
}
