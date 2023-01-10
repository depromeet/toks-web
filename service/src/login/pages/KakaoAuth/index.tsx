import { PATHS } from '@depromeet/path';
import { SSRSuspense } from '@depromeet/toks-components';
import { safelyGetUser, useQueryParam } from '@depromeet/utils';
import { assert } from '@toss/assert';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';
import { isServer } from '@toss/utils';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { getUserinfo } from 'login/pages/MyName/remote/nickName';

function KakaoAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const accessToken = useQueryParam('accessToken', { suspense: true });
  const refreshToken = useQueryParam('refreshToken', { suspense: true });

  assert(accessToken != null && refreshToken != null, '로그인이 정상적으로 처리되지 않았습니다.');

  if (!isServer()) {
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('refreshToken', refreshToken);
    queryClient.refetchQueries(safelyGetUser.queryKey);
  }

  useSuspendedQuery(getUserinfo.queryKey(accessToken), () => getUserinfo({ accessToken }), {
    onSuccess: async user => {
      if (user == null) {
        router.reload();
        return;
      }

      await queryClient.refetchQueries(safelyGetUser.queryKey);
      if (user.nickname === '닉네임을 등록해주세요') {
        await router.replace(PATHS.login.nickname);
      } else {
        await router.replace(PATHS.home.myStudy);
      }
    },
  });

  return null;
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <KakaoAuth />
    </SSRSuspense>
  </ErrorBoundary>
);
