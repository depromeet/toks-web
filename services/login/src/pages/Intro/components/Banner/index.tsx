import { Button, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import { login as requestLogin } from '../../remote/login';

export const Banner = () => {
  const { mutateAsync: login, isLoading } = useMutation(requestLogin);
  const router = useRouter();

  const onClick = () => {
    router.push('https://api.tokstudy.com/oauth2/authorize/kakao');
  };
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      css={{
        height: '170px',
        marginTop: '126px',
        gap: '43px',
      }}
    >
      <Text variant="title01" color="white">
        개발자를 위한 스터디, 똑스-잇!
      </Text>
      <Button type="general" width={200} size="large" onClick={onClick} loading={isLoading}>
        똑스 로그인
      </Button>
    </Flex>
  );
};
