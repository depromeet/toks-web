export interface QuizCreateFormValue {
  quiz: string;
  quizType: 'MARK_DOWN' | 'O_X';
  description: string;
  answer: string;
  startedAt: string;
  endedAt: string;
  studyId: number;
  imageFiles: File[];
}
