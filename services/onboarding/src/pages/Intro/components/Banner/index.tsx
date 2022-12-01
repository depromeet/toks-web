import { Button, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

export const Banner = () => {
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
      <Button type="general">똑스 로그인</Button>
    </Flex>
  );
};
