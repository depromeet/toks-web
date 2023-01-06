import { User } from './user';

export type QuizStatus = 'DONE' | 'TO_DO' | 'IN_PROGRESS';

export type Quiz = {
  quizId: number;
  question: string;
  quizType: string;
  description: string;
  startedAt: string;
  endedAt: string;
  durationOfSecond: number;
  timestamp: string;
  creator: User;
  unSubmitters: User[];
  studyId: number;
  quizStatus: QuizStatus;
  myQuiz: boolean;
  round: number;
};

export interface QuizResponse {
  quizzes: Quiz[];
}
