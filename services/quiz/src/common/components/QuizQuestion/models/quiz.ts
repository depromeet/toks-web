export interface QuizByIdResponse {
  quizId: number;
  question: string;
  quizType: string;
  description: string;
  startedAt: string;
  endedAt: string;
  durationOfSecond: number;
  timestamp: string;
  imageUrls: string[];
  creator: {
    userId: number;
    nickname: string;
    profileImageUrl: string;
  };
  studyId: number;
  round: number;
}
