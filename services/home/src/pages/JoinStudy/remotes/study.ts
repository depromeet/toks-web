import { http } from '@depromeet/http';
import { StudyByIdResponse } from '../models/study';

export async function getStudyById(studyId: string | string[] | undefined) {
  return await http.get<StudyByIdResponse>(`/api/v1/studies/${studyId}/enter`);
}
