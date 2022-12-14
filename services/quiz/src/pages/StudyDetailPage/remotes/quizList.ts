import { quizList } from 'mock/db';

import { QuizResponse } from '../models/quizList';

export const getQuizList = () => {
  return new Promise<QuizResponse[]>(resolve => setTimeout(() => resolve(quizList), 3000));
};
