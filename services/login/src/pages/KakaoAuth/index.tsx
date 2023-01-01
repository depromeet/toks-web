import { PATHS, pushTo } from '@depromeet/path';
import { ProgressSpinner, SSRSuspense } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { assert } from '@toss/assert';
import { getUserinfo } from 'pages/MyName/remote/nickName';

function KakaoAuth() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }

    assert(accessToken != null && refreshToken != null, '로그인이 정상적으로 처리되지 않았습니다.');

    // 토큰 저장 후 API 호출해야함. 따라서 react query 이용 X
    getUserinfo({ accessToken }).then(result => {
      if (result.nickname === '닉네임을 등록해주세요') {
        router.push(PATHS.login.nickname);
      } else {
        pushTo(PATHS.home.myStudy);
      }
    });
  }, [router]);

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
