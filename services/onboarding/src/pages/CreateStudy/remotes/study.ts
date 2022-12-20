import { http } from '@depromeet/http';
import { StudyResponse } from '@depromeet/toks-components';
import { CreateStudyFormValues } from '../components/CreateStudyForm/type';

export async function postStudy(study: CreateStudyFormValues) {
  return await http.post<StudyResponse>('/api/v1/study', study);
}

export async function getStudyFormData(studyId: string | number) {
  return await http.get<StudyResponse>(`/api/v1/study/${studyId}`);
}
