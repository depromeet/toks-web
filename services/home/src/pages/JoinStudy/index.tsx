import { Text, ToksHeader } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import { JoinStudyBox } from 'components/JoinStudy/JoinStudyBox';

import { HeaderContainer, JoinGuide, pageTitle } from './style';

function JoinStudy() {
  return (
    <Flex.Center direction="column" css={{ gap: '60px', marginTop: '80px' }}>
      <Text size={46} weight={700} css={pageTitle}>
        똑스와 함께해 볼까요?
      </Text>

      <JoinStudyBox />
    </Flex.Center>
  );
}

export default JoinStudy;
