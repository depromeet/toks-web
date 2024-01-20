import { useSuspenseQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/common';

export const useSuspenseUserInfoQuery = (accessToken?: string) => {
  return useSuspenseQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: getUserInfo,
  });
};
