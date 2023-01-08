import { http } from '@depromeet/http';

export async function postStudyById(studyId: string) {
  return await http.post(`/api/v1/studies/${studyId}/join`);
}
