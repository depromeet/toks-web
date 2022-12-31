import { http } from '@depromeet/http';

import { StudyEnterResponse } from '../types';

export const getStudy = async (studyId: number | string) => {
  return await http.get<StudyEnterResponse>(`/api/v1/studies/${studyId}/enter`);
};
