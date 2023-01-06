import { theme } from '@depromeet/theme';
import { Accordion, UserAvatar, Text, ToastViewer } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { QuizReplierResPonse } from 'common/models/quizReply';
import { useState } from 'react';
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
    <AnswerContainer key={creator.userId}>
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
