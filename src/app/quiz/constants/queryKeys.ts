export const QUERY_KEYS = {
  GET_QUIZ_DETAIL: (quizId: string) => ['GET_QUIZ_DETAIL', quizId],
  GET_COMMENT_LIST: (quizId: string) => ['GET_COMMENT_LIST', quizId],
} as const;
