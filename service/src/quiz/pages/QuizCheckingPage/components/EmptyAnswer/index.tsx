import { Image, Text, emoji } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import { EmptyAnswerWrapper } from './style';

export function EmptyAnswer() {
  return (
    <EmptyAnswerWrapper>
      <Flex.Center css={{ margin: 'auto' }} direction="column">
        <Image src={emoji.hood} width={170} height={170} alt="" />
        <Text variant="title04" color="gray030">
          아직 답안을 작성하지 않았어요!
        </Text>
      </Flex.Center>
    </EmptyAnswerWrapper>
  );
}
