import { Quiz } from '@/app/quiz/models/quiz';

export interface GetQuizListRequest {
  page: number;
  size: number;
  categoryIds: number[];
}

export interface GetQuizListResponse {
  data: {
    content: QuizContent[];
    page: number;
    size: number;
    totalPage: number;
    totalCount: number;
  };
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
