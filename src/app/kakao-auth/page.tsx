'use client';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useUserInfoQuery } from '@/queries';

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

  const { data: user } = useUserInfoQuery(accessToken as string);
  console.log(user);

  return null;
};

export default KakaoAuth;
