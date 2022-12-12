import { User } from "../../../../utils/userUtils";
import { studyInfo, quizList, rankingList } from "../../../mock/db";

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

export const getStudyInfo = async () => {
  return await new Promise<StudyInfo>(resolve => setTimeout(() => resolve(studyInfo), 2000));
};
  
export const getQuizList = async () => {
  return await new Promise<QuizItem[]>(resolve => setTimeout(() => resolve(quizList), 3000));
};
  
export const getRankingList = async () => {
  return await new Promise(resolve => setTimeout(() => resolve(rankingList), 1000));
}; 
