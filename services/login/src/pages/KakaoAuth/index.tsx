import { ProgressSpinner } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { GetUserResponse } from '../../interfaces/interfaces';
import { getNickname } from '../../remote/login';

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
  }, []);

  const { data: user, isSuccess } = useQuery<GetUserResponse>(['nickname'], getNickname);

  if (isSuccess) {
    if (user?.nickname === '닉네임을 등록해주세요') {
      router.push('/myName');
    } else {
      //TODO: 닉네임이 있는 경우 홈으로 라우팅 홈 도메인으로 수정 필요
      router.push('/hi');
    }
  }

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default KakaoAuth;
