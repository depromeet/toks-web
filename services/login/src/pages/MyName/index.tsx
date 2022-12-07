import { Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';

import { NickNameBox } from 'MyName/components/NickNameBox';

function MyName() {
  return (
    <Flex.Center direction="column">
      <Text variant="title02" css={{ marginTop: '180px' }}>
        똑스 시작하기
      </Text>
      <Spacing size={60} />
      <NickNameBox />
    </Flex.Center>
  );
}

export default MyName;
