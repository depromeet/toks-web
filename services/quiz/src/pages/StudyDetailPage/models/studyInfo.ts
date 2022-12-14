import { User } from './user';

export interface StudyInfo {
  studyId: number;
  title: string;
  description: string;
  studyTags: string[];
  members: User[];
}
