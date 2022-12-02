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
    router.push('/myName');
  }, []);

  return (
    <Flex.Center css={{ marginTop: '250px' }}>
      <ProgressSpinner />
    </Flex.Center>
  );
}

export default kakaoauth;
