export interface Quiz {
  quizId: number;
  quiz: string;
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
}