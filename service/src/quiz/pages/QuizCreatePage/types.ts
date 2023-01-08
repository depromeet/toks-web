export interface QuizCreateForm {
  question: string;
  quizType: 'MARK_DOWN' | 'O_X';
  description?: string;
  answer: string;
  startedAt: string;
  timepicker: string;
  durationOfSecond: number;
  studyId: number;
  round: number;
  imageFiles?: File[];
}
