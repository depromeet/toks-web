export interface QuizReplierResPonse {
  userId: number;
  nickname: string;
  profileImageUrl: string;
}

export interface EachQuizReplyByResponse {
  quizReplyHistoryId: number;
  answer: string;
  likeCount: number;
  creator: QuizReplierResPonse;
}

export interface QuizReplyByIdResponses {
  quizReplyHistories: EachQuizReplyByResponse[];
}
