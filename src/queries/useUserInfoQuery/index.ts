import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/common';

export const useUserInfoQuery = (accessToken?: string) => {
  return useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: getUserInfo,
    enabled: Boolean(accessToken),
  });
};
