export interface QuizReplyByIdResponse {
  quizReplyHistories: [
    {
      quizReplyHistoryId: number;
      answer: string;
      likeCount: number;
      creator: {
        userId: number;
        nickname: string;
        profileImageUrl: string;
      };
    }
  ];
}
