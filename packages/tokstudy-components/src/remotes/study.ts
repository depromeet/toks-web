import { http } from '@depromeet/http';

import { StudyDetailResponse, StudyEnterResponse } from '../types';

export const getStudy = async (studyId: number | string) => {
  return await http.get<StudyEnterResponse>(`/api/v1/studies/${studyId}/enter`);
};

export const getStudyDetail = async (studyId: number | string) => {
  return await http.get<StudyDetailResponse>(`/api/v1/studies/${studyId}`);
};
