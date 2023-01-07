import { colors } from '@depromeet/theme/dist/colors';
import { Button, Image, Text, useToast } from '@depromeet/toks-components';
import { useSafelyGetUser } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';
import { useMutation } from 'react-query';

import { login as requestLogin } from 'pages/Intro/remote/login';

export const Banner = () => {
  const { open } = useToast();
  const { mutateAsync: login, isLoading } = useMutation(async () => {
    await requestLogin();
    await open({ title: '로그인에 성공했어요', type: 'success', showOnNextPage: true });
  });
  const { data: user } = useSafelyGetUser();

  const isAleadyLogined = user != null;

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      css={{
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
        disabled={isAleadyLogined}
      >
        Kakao 로그인
      </Button>
    </Flex>
  );
};
