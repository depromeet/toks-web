import { User } from '../models/user';

export type QuizStatus = 'default' | 'disabled' | 'activated';

export interface QuizItem {
  quizId: number;
  weekNumber: number;
  title: string;
  openDate: Date;
  limitTime: string;
  creator: User;
  absentee: User[];
}
