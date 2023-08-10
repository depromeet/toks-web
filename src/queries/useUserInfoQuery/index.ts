import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from './apis';

export const useUserInfoQuery = (accessToken?: string) => {
  return useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: getUserInfo,
    enabled: Boolean(accessToken),
  });
};
