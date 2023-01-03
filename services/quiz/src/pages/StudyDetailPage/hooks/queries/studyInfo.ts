import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { StudyInfo } from 'pages/StudyDetailPage/models/studyInfo';
import { getStudyInfoById } from 'pages/StudyDetailPage/remotes/studyInfo';

export const useGetStudyInfo = (studyId: string | string[] | undefined) => {
  return useQuery<StudyInfo>(QUERY_KEYS.GET_STUDY_INFO, () => getStudyInfoById(studyId), {
    enabled: Boolean(studyId),
  });
};
