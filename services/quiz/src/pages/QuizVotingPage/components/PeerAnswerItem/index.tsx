import { theme } from '@depromeet/theme';
import { Accordion, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useState } from 'react';
import { Text } from '@depromeet/toks-components';
import { VoteButton } from '../VoteButton.tsx';
import { PeerAnswerContainer } from './style';
import { EachQuizReplyByResponse, QuizReplierResPonse } from 'common/models/quizReply';

type PeerAnswerItemProps = {
  creator: QuizReplierResPonse;
  answer: string;
  quizReplyHistoryId: number;
  peerAnswers: EachQuizReplyByResponse[];
};
export function PeerAnswerItem({ quizReplyHistoryId, answer, creator, peerAnswers }: PeerAnswerItemProps) {
  const [isFold, setIsFold] = useState(true);

  return (
    <PeerAnswerContainer key={creator.userId}>
      <Accordion
        isFold={isFold}
        onFold={() => setIsFold(prev => !prev)}
        backgroundColor={theme.colors.gray110}
        accordionStyle={{
          padding: '22px 16px',
        }}
        headerNodes={
          <Flex css={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
            <Flex css={{ alignItems: 'center' }}>
              <UserAvatar image={creator.profileImageUrl} size="large" />
              <Text css={{ marginLeft: '12px' }} variant="subhead" color="gray020">
                {creator.nickname}
              </Text>
            </Flex>
            <VoteButton quizReplyHistoryId={quizReplyHistoryId} peerAnswers={peerAnswers} />
          </Flex>
        }
        bodyNodes={
          <>
            <Spacing size={22} />
            <ToastViewer answer={answer} />
          </>
        }
      />
    </PeerAnswerContainer>
  );
}
