import { Category, Quiz } from './quiz';

export interface QuizRecommendModel {
  quiz: Quiz;
  category: Category;
  quizReplyHistoryCount: number;
  quizCommentCount: number;
}
