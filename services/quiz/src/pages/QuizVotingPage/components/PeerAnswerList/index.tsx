import { Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';
import { QUERY_KEYS } from 'constants/queryKeys';

import { PeerAnswerItem } from '../PeerAnswerItem';
import { PeerAnswerWrapper, Wrapper } from './style';

export function PeerAnswerList() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZREPLIES_BY_ID, () => getQuizReplyById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const peerAnswers = quizzes.quizReplyHistories.filter(element => element.creator.nickname !== user.nickname);

  return (
    <Wrapper>
      <Spacing size={'5vh'} />
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안도 확인해볼까요? </Text>
        <DoneNumberNotice done={peerAnswers.length} />
      </Flex>
      <Spacing size={'2vh'} />
      <PeerAnswerWrapper>
        {peerAnswers.map(({ quizReplyHistoryId, answer, creator }) => (
          <PeerAnswerItem
            creator={creator}
            answer={answer}
            quizReplyHistoryId={quizReplyHistoryId}
            peerAnswers={peerAnswers}
          />
        ))}
      </PeerAnswerWrapper>
    </Wrapper>
  );
}
