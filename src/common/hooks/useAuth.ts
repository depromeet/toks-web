'use client';

import { getCookie } from 'cookies-next';

import { useUserInfoQuery } from '@/queries';

export const useAuth = () => {
  const accessToken = getCookie('accessToken');
  const { data: user } = useUserInfoQuery(accessToken as string);

  const isLogin = Boolean(accessToken);

  return {
    isLogin,
    accessToken,
    user,
  };
};
