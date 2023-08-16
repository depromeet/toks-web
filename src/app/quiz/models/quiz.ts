export type QuizType = 'A_B_IMAGE' | 'A_B_SIMPLE' | 'O_X_IMAGE' | 'O_X_SIMPLE';
export type AB = 'A' | 'B';
export type OX = 'O' | 'X';
export type QuizButtonType = AB | OX;
export type ButtonNumber = '1' | '2';

export interface QuizDetailResponse extends QuizResponse {
  isSubmitted: boolean;
}

export interface QuizRecommendResponse extends QuizResponse {}

export interface QuizResponse {
  quiz: Quiz;
  category: Category;
  quizReplyHistoryCount: number;
  quizCommentCount: number;
  answerReplyCount: number;
  quizReply?: QuizReply;
  quizReplyCount: QuizReplyCount;
  isSubmitted: boolean;
}

export interface Quiz {
  id: number;
  categoryId: string;
  title: string;
  tags: string[];
  question: Question;
  quizType: QuizType;
  description: string;
  answer: string;
}

export interface Question {
  question: string;
  imageUrl?: string;
  buttons: {
    [key in ButtonNumber]: QuizButton;
  };
}

export interface QuizButton {
  imageUrl?: string;
  button: { name: string };
}

export interface Category {
  id: string;
  depth: number;
  name: string;
  description: string;
}

export interface QuizReply {
  id: number;
  answer: string;
  createdAt: string;
}

export interface QuizReplyCount {
  totalCount: number;
  replyCount: {
    [key in QuizButtonType]?: ReplyCount;
  };
}

export interface ReplyCount {
  answer: string;
  count: number;
}
