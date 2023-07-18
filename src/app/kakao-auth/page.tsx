'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoAuth = () => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
      router.push('/nickname');
    }
  }, [params, router]);

  return null;
};

export default KakaoAuth;
