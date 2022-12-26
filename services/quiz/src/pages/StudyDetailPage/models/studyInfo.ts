import { User } from '@depromeet/toks-components/src/types/user';

export interface StudyInfo {
  studyId: number;
  title: string;
  description: string;
  studyTags: string[];
  members: User[];
}
