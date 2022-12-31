import { http } from '@depromeet/http';

import { QuizAnswerRequest } from '../models/quiz';

export async function postQuizAnswer(quizAnswer: QuizAnswerRequest) {
  return await http.post('/api/v1/quiz-reply-histories', quizAnswer, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb29oOTYwNDA3QG5hdmVyLmNvbSIsImlhdCI6MTY3MTQ3MTMwMiwiZXhwIjoyMDQ0NzE5MzAyfQ.sp4-Y5XvsnMfNfVe1wbWE9xnTsNMJT8dR1QTAuNsM7A',
    },
  });
}
