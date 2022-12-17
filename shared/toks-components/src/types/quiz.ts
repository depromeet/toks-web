import { User } from './user';

export type QuizStatus = 'DONE' | 'TO_DO' | 'IN_PROGRESS';

export interface QuizResponse {
  quizId: number;
  quiz: string;
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
}
