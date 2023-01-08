import { http } from '@depromeet/http';

import { StudyInfo } from '../models/studyInfo';

export async function getStudyInfoById(studyId: string) {
  return await http.get<StudyInfo>(`/api/v1/studies/${studyId}`);
}
