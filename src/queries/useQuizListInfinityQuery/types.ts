import { Quiz } from '@/app/(BackHeader)/quiz/models/quiz';

export interface GetQuizListRequest {
  page: number;
  size: number;
  categoryIds: string[];
}

export interface GetQuizListResponse {
  content: QuizContent[];
  page: number;
  size: number;
  totalPage: number;
  totalCount: number;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  depth: number;
}

export interface QuizContent {
  quiz: Quiz;
  category: QuizCategory;
  quizReplyHistoryCount: number;
  answerReplyCount: number;
  quizCommentCount: number;
}
