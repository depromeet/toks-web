import { http } from '@depromeet/http';
import { StudyByIdResponse } from '../models/study';

export async function getStudyById(studyId: string | string[] | undefined) {
  return await http.get<{ study: StudyByIdResponse }>(`/api/v1/studies/${studyId}`);
}
