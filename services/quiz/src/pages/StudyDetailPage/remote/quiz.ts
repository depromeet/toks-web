import { studyInfo, quizList, rankingList } from "../../../mock/db";

export const getStudyInfo = async () => {
  return await new Promise(resolve => setTimeout(() => resolve(studyInfo), 2000));
};
  
export const getQuizList = async () => {
  return await new Promise(resolve => setTimeout(() => resolve(quizList), 3000));
};
  
export const getRankingList = async () => {
  return await new Promise(resolve => setTimeout(() => resolve(rankingList), 1000));
}; 
