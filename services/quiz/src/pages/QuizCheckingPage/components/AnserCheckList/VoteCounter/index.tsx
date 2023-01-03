import { Flex } from '@toss/emotion-utils';
import { Text } from '@depromeet/toks-components';
import { CountArea } from './style';

export function VoteCounter({ voteCount }: { voteCount: number }) {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <CountArea>
        <Text variant="subhead" color="primary">
          {voteCount}
        </Text>
      </CountArea>
      <Text variant="subhead" color="primary" css={{ marginLeft: '8px' }}>
        Toks
      </Text>
    </Flex>
  );
}
