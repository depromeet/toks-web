'use client';

import { useQuery } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getFirstUserInfo } from '@/common';
import { QUERY_KEYS } from '@/common/constants/queryKeys';
import { useToast } from '@/common/hooks/useToast';
import { isToksError } from '@/common/utils/http';

const KakaoAuth = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>('');
  const [refreshToken, setRefreshToken] = useState<string | null>('');

  const { saveToastInfo, clearSavedToast } = useToast();

  useEffect(() => {
    setAccessToken(params.get('accessToken'));
    setRefreshToken(params.get('refreshToken'));
    if (accessToken && refreshToken) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
    }
  }, [params, router, accessToken, refreshToken]);

  if (accessToken && refreshToken) {
    clearSavedToast();
    saveToastInfo({
      showOnNextPage: true,
      isShow: true,
      direction: 'bottom',
      type: 'success',
      title: '로그인을 성공했어요.',
    });
  }

  const { data: user, isError } = useQuery(
    QUERY_KEYS.GET_USER_INFO(accessToken),
    async () => {
      try {
        return await getFirstUserInfo({ accessToken: accessToken as string });
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
