import { PATHS } from '@depromeet/path';
import { Button, FULL_HEIGHT, Image, Text, emoji } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

export default function Error() {
  return (
    <Flex.Center css={{ height: FULL_HEIGHT, gap: '16px' }} direction="column">
      <Text variant="title03">화면을 불러오지 못했어요.</Text>
      <Text variant="body01">잠시 후에 다시 시도해 주세요.</Text>
      <Image src={emoji.sad} width={170} height={170} alt="" />
      <Link href={PATHS.main}>
        <Button width={300}>홈으로 돌아가기</Button>
      </Link>
      <Spacing size={200} />
    </Flex.Center>
  );
}
