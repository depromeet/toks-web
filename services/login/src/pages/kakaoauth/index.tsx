import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProgressSpinner } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

function kakaoauth() {
  const router = useRouter();
  useEffect(() => {
    // @ts-expect-error
    const params = new URLSearchParams(location);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }

    //닉네임 조회 이후
    //if (toksname ==null) 인 경우
    router.push('/myName');

    // 닉네임 조회 이후
    //(if toksname!==null)인 경우
    //원래 있던 페이지? /quiz/study-detail?로 리다이렉트
    router.push('');
  }, []);

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default kakaoauth;
