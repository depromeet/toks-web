import { http } from '@depromeet/http';
import { QuizzesByIdResponse } from '../../pages/QuizSolvingPage/components/StudyPeerAnswer/models/quizzes';

export async function getQuizzesById(quizIdParams: string | string[] | undefined) {
  return await http.get<QuizzesByIdResponse>(`/api/v1/quiz-reply-histories/quizzes/${quizIdParams}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb29oOTYwNDA3QG5hdmVyLmNvbSIsImlhdCI6MTY3MTQ3MTMwMiwiZXhwIjoyMDQ0NzE5MzAyfQ.sp4-Y5XvsnMfNfVe1wbWE9xnTsNMJT8dR1QTAuNsM7A',
    },
  });
}
