import { getOriginUrl } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { SSRSuspense, useToast } from '@depromeet/toks-components';
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
  const { open } = useToast();

  assert(accessToken != null && refreshToken != null, '로그인이 정상적으로 처리되지 않았습니다.');

  if (!isServer()) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
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
        await open({ title: '로그인에 성공했어요', type: 'success' });
        await router.replace(PATHS.login.nickname);
      } else {
        const originUrl = getOriginUrl();

        if (originUrl != null) {
          await router.replace(originUrl.path);
          await open({ title: '로그인에 성공했어요', type: 'success' });
        } else {
          await router.replace(PATHS.home.myStudy);
          await open({ title: '로그인에 성공했어요', type: 'success' });
        }
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
