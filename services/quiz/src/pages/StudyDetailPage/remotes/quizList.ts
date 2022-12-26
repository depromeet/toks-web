import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';

import { quizList } from 'mock/db';

export const getQuizList = () => {
  return new Promise<QuizResponse[]>(resolve => setTimeout(() => resolve(quizList), 1000));
};
