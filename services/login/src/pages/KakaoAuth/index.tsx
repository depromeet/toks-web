import { ProgressSpinner } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { instance } from '@depromeet/http';

function KakaoAuth() {
  const router = useRouter();

  const getNickname = async () => {
    try {
      const { data } = await instance.get('/api/v1/user/nickname');
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }

    // TODO: axios package 업로드 이후 수정 예정
    //닉네임 조회 이후
    //if (toksname ==null) 인 경우
    router.push('/myName');

    // 닉네임 조회 이후
    //(if toksname!==null)인 경우
    //원래 있던 페이지? /quiz/study-detail?로 리다이렉트
    router.push('');
  }, [router]);

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default KakaoAuth;
