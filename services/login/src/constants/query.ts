export const QUERY_KEY = {
  NICKNAME: 'nickname',
} as const;

export const REACT_QUERY_KEY = {
  NICKNAME: (token: string) => [QUERY_KEY.NICKNAME, token],
};
