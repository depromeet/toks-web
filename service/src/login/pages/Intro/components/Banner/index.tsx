import { colors } from '@depromeet/theme/dist/colors';
import { Button, Image, Text } from '@depromeet/toks-components';
import { useLogin, useSafelyGetUser } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';

export const Banner = () => {
  const { login } = useLogin();

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
        type="primary"
        width={200}
        size="large"
        onClick={() => login()}
        buttonStyle={{ fontSize: '18px', color: colors.white }}
        disabled={isAleadyLogined}
      >
        <Image src="https://asset.tokstudy.com/kakao-logo.png" alt="" width={28} height={28} />
        Kakao 로그인
      </Button>
    </Flex>
  );
};
