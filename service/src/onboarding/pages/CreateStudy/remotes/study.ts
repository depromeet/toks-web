import { http } from '@depromeet/http';

import { CreateStudyFormValues } from '../components/CreateStudyForm/type';

export async function postStudy(study: CreateStudyFormValues) {
  return await http.post('/api/v1/studies', study);
}
