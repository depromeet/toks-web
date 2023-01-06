import { theme } from '@depromeet/theme';
import { Accordion, Text, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useState } from 'react';

import { QuizReplierResPonse } from 'common/models/quizReply';

import { VoteCounter } from '../VoteCounter';
import { AnswerContainer } from './style';

type AnswerCheckItemProps = {
  creator: QuizReplierResPonse;
  answer: string;
  likeCount: number;
  isFold: boolean;
};
export function AnswerCheckItem({ answer, likeCount, creator, isFold }: AnswerCheckItemProps) {
  const [isAnswerFold, setIsAnswerFold] = useState(isFold);

  return (
    <AnswerContainer>
      <Accordion
        isFold={isAnswerFold}
        onFold={() => setIsAnswerFold(prev => !prev)}
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
            <VoteCounter voteCount={likeCount} />
          </Flex>
        }
        bodyNodes={
          <>
            <Spacing size={22} />
            <ToastViewer answer={answer} />
          </>
        }
      />
    </AnswerContainer>
  );
}
