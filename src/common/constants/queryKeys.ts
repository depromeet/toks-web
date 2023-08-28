export const QUERY_KEYS = {
  GET_USER_INFO: (accessToken: string | null) => ['GET_USER_INFO', accessToken],
} as const;
