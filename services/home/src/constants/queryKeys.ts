export const QUERY_KEYS = {
  GET_MY_STUDIES: ['GET_MY_STUDIES'],
  GET_STUDY_STATUS: (id: number) => ['GET_STUDY_STATUS', id],
  GET_STUDY_BY_ID: ['GET_STUDY_BY_ID'],
} as const;
