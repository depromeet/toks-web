import { studyInfo } from "mock/db";
import { StudyInfo } from "../models/studyInfo";

export const getStudyInfo = async () => {
    return await new Promise<StudyInfo>(resolve => setTimeout(() => resolve(studyInfo), 2000));
  };