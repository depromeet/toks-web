import { Text } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useQuery } from 'react-query';

import { DoneNumberNotice } from 'quiz/common/components/DoneNumberNotice';
import { getQuizReplyById } from 'quiz/common/remotes/quizReply';
import { getUser } from 'quiz/common/remotes/user';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { PeerAnswerItem } from '../PeerAnswerItem';
import { PeerAnswerWrapper, Wrapper } from './style';

export function PeerAnswerList(isQuizCreator: { isQuizCreator: boolean }) {
  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { data: quizzes } = useQuery(
    QUERY_KEYS.GET_QUIZREPLIES_BY_ID(quizIdParams),
    () => getQuizReplyById(quizIdParams),
    {
      enabled: Boolean(quizIdParams),
    }
  );
  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const peerAnswers = quizzes.quizReplyHistories.filter(element => element.creator.nickname !== user.nickname);
  return (
    <Wrapper>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안도 확인해볼까요? </Text>
        <DoneNumberNotice done={peerAnswers.length} />
      </Flex>
      <Spacing size={'2vh'} />
      <PeerAnswerWrapper isQuizCreator={isQuizCreator.isQuizCreator}>
        {peerAnswers.map(({ quizReplyHistoryId, answer, creator }) => (
          <PeerAnswerItem
            key={creator.userId}
            creator={creator}
            answer={answer}
            quizReplyHistoryId={quizReplyHistoryId}
            peerAnswers={peerAnswers}
          />
        ))}
        <Spacing size={80} />
      </PeerAnswerWrapper>
    </Wrapper>
  );
}
