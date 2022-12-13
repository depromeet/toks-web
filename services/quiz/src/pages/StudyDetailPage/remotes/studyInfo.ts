import { studyInfo } from 'mock/db';

import { StudyInfo } from '../models/studyInfo';

export const getStudyInfo = () => {
  return new Promise<StudyInfo>(resolve => setTimeout(() => resolve(studyInfo), 2000));
};
