import { Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import { JoinStudyBox } from 'JoinStudy/components/JoinStudyBox';

function JoinStudy() {
  return (
    <Flex.Center direction="column" css={{ gap: '60px', marginTop: '80px' }}>
      <Text variant="title02">똑스와 함께해 볼까요?</Text>
      <JoinStudyBox />
    </Flex.Center>
  );
}

export default JoinStudy;
