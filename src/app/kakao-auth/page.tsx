'use client';

import { useQuery } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getUserInfo } from '@/queries';

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

      // router.push('/nickname');
    }
  }, [params, router, accessToken]);

  const { data: user, isError } = useQuery(
    ['userInfo', accessToken],
    async () => {
      try {
        return await getUserInfo();
      } catch (err: unknown) {
        if (err.status === 404) {
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
