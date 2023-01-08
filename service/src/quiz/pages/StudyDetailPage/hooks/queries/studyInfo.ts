import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { StudyInfo } from 'quiz/pages/StudyDetailPage/models/studyInfo';
import { getStudyInfoById } from 'quiz/pages/StudyDetailPage/remotes/studyInfo';

export const useGetStudyInfo = (studyId: string) => {
  return useSuspendedQuery<StudyInfo>(QUERY_KEYS.GET_STUDY_INFO(studyId), () => getStudyInfoById(studyId));
};
