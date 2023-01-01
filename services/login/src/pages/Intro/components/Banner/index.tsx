import { colors } from '@depromeet/theme/dist/colors';
import { Button, Image, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { useMutation } from 'react-query';

import { login as requestLogin } from 'pages/Intro/remote/login';

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
      <Button
        type="general"
        width={200}
        size="large"
        onClick={() => login()}
        loading={isLoading}
        icon={<Image src="https://asset.tokstudy.com/kakao-logo.png" alt="" width={28} height={28} />}
        buttonStyle={{ fontSize: '18px', color: colors.gray110 }}
      >
        Kakao 로그인
      </Button>
    </Flex>
  );
};
