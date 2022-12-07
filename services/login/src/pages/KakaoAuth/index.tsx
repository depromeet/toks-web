import { ProgressSpinner } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getNickname } from '../../apis/getNickname';

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

    console.log(getNickname());
    // if (nickName === '닉네임을 설정해주세요') {
    //   router.push('/myName');
    // } else {
    //   router.push('');
    // }
  }, [router]);

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default KakaoAuth;
