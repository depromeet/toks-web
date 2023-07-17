'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';

const Kakaoauth = () => {
  const params = useSearchParams();
  const router = useRouter();

  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  if (accessToken && refreshToken) {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);
    router.push('/nickname');
  }
};

export default Kakaoauth;
