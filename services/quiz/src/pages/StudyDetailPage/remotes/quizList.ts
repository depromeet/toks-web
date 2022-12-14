import { quizList } from '../../../mock/db';
import { QuizItem } from '../models/quizList';

export const getQuizList = () => {
  return new Promise<QuizItem[]>(resolve => setTimeout(() => resolve(quizList), 3000));
};
