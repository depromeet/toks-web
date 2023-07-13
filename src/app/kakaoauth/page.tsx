'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCookies } from 'react-cookie';

const Kakaoauth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    'accessToken',
    'refreshToken',
  ]);
  const params = useSearchParams();
  const router = useRouter();

  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  console.log(cookies);

  if (accessToken && refreshToken) {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);
    router.push('/nickname');
  }
};

export default Kakaoauth;
