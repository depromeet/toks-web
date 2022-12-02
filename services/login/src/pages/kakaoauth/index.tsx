import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQueryParams } from '@toss/use-query-param';

function kakaoauth() {
  const { accessToken, refreshToken } = useQueryParams<{ accessToken: string; refreshToken: string }>();
  const router = useRouter();
  useEffect(() => {
    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      router.push('/login/myName');
    }
  }, []);
}

export default kakaoauth;
