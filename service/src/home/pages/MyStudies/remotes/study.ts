import { http } from '@depromeet/http';

import { Study } from '../models/study';

export async function getMyStudies() {
  return await http.get<{ studies: Study[] }>('/api/v1/studies');
}
