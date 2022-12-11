import { Button, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useMutation } from 'react-query';

import { login as requestLogin } from '../../remote/login';

export const Banner = () => {
  const { mutateAsync: login, isLoading } = useMutation(requestLogin);

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
      <Button type="general" width={200} size="large" onClick={() => login()} loading={isLoading}>
        똑스 로그인
      </Button>
    </Flex>
  );
};