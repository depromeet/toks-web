import { http } from '@depromeet/http';

import { StudyResponse } from '../types';

export const getStudy = async (studyId: number) => {
  return await http.get<StudyResponse>(`/api/v1/studies/${studyId}`);
};
