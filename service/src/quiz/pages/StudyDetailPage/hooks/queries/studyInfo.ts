import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { StudyInfo } from 'quiz/pages/StudyDetailPage/models/studyInfo';
import { getStudyInfoById } from 'quiz/pages/StudyDetailPage/remotes/studyInfo';

export const useGetStudyInfo = (studyId: string | string[] | undefined) => {
  return useQuery<StudyInfo>(QUERY_KEYS.GET_STUDY_INFO, () => getStudyInfoById(studyId), {
    enabled: Boolean(studyId),
  });
};
