export interface QuizzesByIdResponse {
  quizReplyHistories: [
    {
      quizReplyHistoryId: number;
      answer: string;
      likeNumber: number;
      creator: {
        userId: number;
        nickname: string;
        profileImageUrl: string;
      };
    }
  ];
}
