import { quizList } from 'mock/db';

import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';

export const getQuizList = () => {
  return new Promise<QuizResponse[]>(resolve => setTimeout(() => resolve(quizList), 1000));
};
