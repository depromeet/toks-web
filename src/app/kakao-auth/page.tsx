'use client';

import { wrap } from '@suspensive/react';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { getFirstUserInfo } from '@/common';
import { useToast } from '@/common/hooks/useToast';

const KakaoAuth = wrap
  .Suspense({
    fallback: null,
  })
  .on(() => {
    const params = useSearchParams();
    const router = useRouter();
    const accessToken = params.get('accessToken') as string;
    const refreshToken = params.get('refreshToken') as string;

    const { saveToastInfo, clearSavedToast } = useToast();

    useEffect(() => {
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
    }, [accessToken, refreshToken, clearSavedToast, saveToastInfo]);

    if (accessToken && refreshToken) {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
    }

    (async function login() {
      try {
        const res = await getFirstUserInfo({
          accessToken,
        });
        if (!res.ok && res.status === 404) {
          router.replace('/nickname');
        } else {
          router.replace('/toks-main');
        }
      } catch (err: unknown) {
        console.log(err);
      }
    })();

    return null;
  });

export default KakaoAuth;
