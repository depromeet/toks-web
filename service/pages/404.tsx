import { PATHS } from '@depromeet/path';
import { Button, emoji, FULL_HEIGHT, Image, Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex.Center css={{ height: FULL_HEIGHT, gap: '16px' }} direction="column">
      <Image src={emoji.sad} width={170} height={170} alt="" />
      <Text variant="title03">길을 잃으셨나요?</Text>
      <Text variant="body01">
        죄송합니다. 해당하는 페이지를 찾을 수 없어요.
        <br />
        홈페이지로 이동해 다양한 서비스를 누려보세요.
      </Text>
      <Spacing size={50} />
      <Link href={PATHS.main}>
        <Button width={300}>Toks 홈</Button>
      </Link>
      <Spacing size={200} />
    </Flex.Center>
  );
}
