export const QUERY_KEYS = {
  GET_MY_STUDIES: ['GET_MY_STUDIES'],
  GET_HAS_NEW_QUIX: (id: number) => ['GET_HAS_NEW_QUIX', id],
} as const;
