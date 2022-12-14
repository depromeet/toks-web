import { PATHS, pushTo } from '@depromeet/path';
import { ProgressSpinner, SSRSuspense } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUserInfo } from 'hooks/query/useUserInfo';

function KakaoAuth() {
  const router = useRouter();
  const { data: user } = useUserInfo();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }

    if (user.nickname === '닉네임을 등록해주세요') {
      router.push(PATHS.login.nickname);
    } else {
      pushTo(PATHS.home.myStudy);
    }
  }, [router, user]);

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <KakaoAuth />
    </SSRSuspense>
  </ErrorBoundary>
);
