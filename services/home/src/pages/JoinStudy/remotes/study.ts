import { http } from '@depromeet/http';

export async function postStudyById(studyId: string | string[] | undefined) {
  return await http.post(`/api/v1/studies/${studyId}/join`);
}
