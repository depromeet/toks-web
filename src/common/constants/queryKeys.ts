export const QUERY_KEYS = {
  GET_USER_INFO: (accessToken: string | null) => ['GET_USER_INFO', accessToken],
  GET_PROGRESS_INFO: (month: number, year: number) => [
    'GET_PROGRESS_INFO',
    month,
    year,
  ],
} as const;
