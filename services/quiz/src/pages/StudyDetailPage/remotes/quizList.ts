import { http } from '@depromeet/http';
import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';

// export const getQuizList = () => {
//   return new Promise<QuizResponse[]>(resolve => setTimeout(() => resolve(quizList), 1000));
// };

export async function getQuizListById(studyId: string | string[] | undefined) {
  return await http.get<QuizResponse>(`/api/v1/quizzes/studies/${studyId}`);
}
