'use client';

import { useQuery } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getUserInfo } from '@/common';
import { QUERY_KEYS } from '@/common/constants/queryKeys';
import { isToksError } from '@/common/utils/http';

const KakaoAuth = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>('');

  useEffect(() => {
    setAccessToken(params.get('accessToken'));
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
    }
  }, [params, router, accessToken]);

  const { data: user, isError } = useQuery(
    QUERY_KEYS.GET_USER_INFO(accessToken),
    async () => {
      try {
        return await getUserInfo();
      } catch (err: unknown) {
        if (isToksError(err) && err.status === 404) {
          router.replace('/nickname');
        }
      }
    }
  );

  if (user && !isError) {
    router.replace('/toks-main');
  }

  return null;
};

export default KakaoAuth;
