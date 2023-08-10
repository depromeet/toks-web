'use client';

import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

import { useUserInfoQuery } from '@/queries';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const accessToken = getCookie('accessToken');
  const { data: user } = useUserInfoQuery(accessToken as string);

  useEffect(() => {
    setIsLogin(Boolean(accessToken));
  }, [accessToken]);

  return {
    isLogin,
    accessToken,
    user,
  };
};
