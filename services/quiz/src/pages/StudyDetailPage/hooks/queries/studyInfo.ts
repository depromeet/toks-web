import { useSuspendedQuery } from "@toss/react-query";
import { QUERY_KEYS } from "constants/queryKeys";
import { StudyInfo } from "pages/StudyDetailPage/models/studyInfo";
import { getStudyInfo } from "pages/StudyDetailPage/remotes/studyInfo";

export const useGetStudyInfo = () => {
    return useSuspendedQuery<StudyInfo>(QUERY_KEYS.GET_STUDY_INFO, getStudyInfo);
}