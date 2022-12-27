import { http } from '@depromeet/http';
import { Quiz } from '../models/quiz';

export async function getQuizById(quizId: string | string[] | undefined) {
  return await http.get<Quiz>(`/api/v1/quizzes/${quizId}`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb29oOTYwNDA3QG5hdmVyLmNvbSIsImlhdCI6MTY3MTQ3MTMwMiwiZXhwIjoyMDQ0NzE5MzAyfQ.sp4-Y5XvsnMfNfVe1wbWE9xnTsNMJT8dR1QTAuNsM7A',
    },
  });
}
