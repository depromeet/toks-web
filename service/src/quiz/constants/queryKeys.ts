export const QUERY_KEYS = {
  GET_STUDY_INFO: (studyId: string) => ['GET_STUDY_INFO', studyId],
  GET_QUIZ_LIST: (studyId: string) => ['GET_QUIZ_LIST', studyId],
  GET_RANKING_LIST: (studyId: string) => ['GET_RANKING_LIST', studyId],
  GET_QUIZ_BY_ID: (quizIdParams: string) => ['GET_QUIZ_BY_ID', quizIdParams],
  GET_QUIZREPLIES_BY_ID: (quizIdParams: string) => ['GET_QUIZREPLIES_BY_ID', quizIdParams],
  GET_USER_INFO: ['GET_USER_INFO'],
  GET_QUIZREPLY: ['GET_QUIZ_REPLY'],
  GET_SORTED_QUIZREPLY: (quizIdParams: string) => ['GET_SORTED_QUIZREPLY', quizIdParams],
} as const;
