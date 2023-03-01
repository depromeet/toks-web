import { colors } from '@depromeet/theme/dist/colors';
import { Button, Text } from '@depromeet/toks-components';
import { useLogin, useSafelyGetUser } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';

export const Banner = () => {
  const { login, isLoading } = useLogin();

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
        icon={isLoading ? 'loading' : 'kakao'}
        type="primary"
        width={200}
        size="large"
        onClick={() => login()}
        buttonStyle={{ fontSize: '18px', color: colors.white }}
        disabled={isAleadyLogined}
      >
        Kakao 로그인
      </Button>
    </Flex>
  );
};
