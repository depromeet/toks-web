import { User } from '../../../../utils/userUtils';
import { quizList, rankingList, studyInfo } from '../../../mock/db';

interface QuizItem {
  quizId: number;
  weekNumber: number;
  title: string;
  openDate: Date;
  limitTime: string;
  creator: User;
  absentee: User[];
}

interface StudyInfo {
  studyId: number;
  title: string;
  description: string;
  studyTags: string[];
  members: User[];
}

type Ranking = number | undefined;

interface RankingItem {
  ranking?: Ranking;
  toks: number;
  user: User;
}

export const getStudyInfo = async () => {
  return await new Promise<StudyInfo>(resolve => setTimeout(() => resolve(studyInfo), 2000));
};

export const getQuizList = async () => {
  return await new Promise<QuizItem[]>(resolve => setTimeout(() => resolve(quizList), 3000));
};

export const getRankingList = async () => {
  return await new Promise<RankingItem[]>(resolve => setTimeout(() => resolve(rankingList), 1000));
};
