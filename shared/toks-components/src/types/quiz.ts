import { User } from './user';

export type QuizStatus = 'default' | 'disabled' | 'activated';

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
  quizStatus: string;
}
