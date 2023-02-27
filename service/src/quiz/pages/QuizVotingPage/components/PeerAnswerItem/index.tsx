import { theme } from '@depromeet/theme';
import { Accordion, Avatar, Text, ToastViewer } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useState } from 'react';

import { EachQuizReplyByResponse, QuizReplierResPonse } from 'quiz/common/models/quizReply';

import { VoteButton } from '../VoteButton.tsx';
import { PeerAnswerContainer } from './style';

type PeerAnswerItemProps = {
  creator: QuizReplierResPonse;
  answer: string;
  quizReplyHistoryId: number;
  peerAnswers: EachQuizReplyByResponse[];
};
export function PeerAnswerItem({ quizReplyHistoryId, answer, creator, peerAnswers }: PeerAnswerItemProps) {
  const [isFold, setIsFold] = useState(true);

  return (
    <PeerAnswerContainer>
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
              <Avatar src={creator.profileImageUrl} size="large" alt={creator.nickname} />
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
            <ToastViewer height={'18vh'} answer={answer} overFlow="visible" />
          </>
        }
      />
    </PeerAnswerContainer>
  );
}
