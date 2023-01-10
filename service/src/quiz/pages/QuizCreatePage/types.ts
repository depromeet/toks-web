export interface QuizCreateForm {
  question: string;
  quizType: string;
  description?: string;
  answer: string;
  startedAt: string;
  timepicker?: string;
  durationOfSecond: number;
  studyId: number;
  round: number;
  imageUrls?: string[];
  imageFiles?: File[];
}

export interface PostImageUploadResponse {
  imageUrl: string;
  id: number;
}
