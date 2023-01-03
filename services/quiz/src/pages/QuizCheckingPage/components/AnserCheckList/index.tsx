import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Accordion, Text, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';
import { useState } from 'react';
import { theme } from '@depromeet/theme';
import { AnswerWrapper, Wrapper } from './style';
import { VoteCounter } from './VoteCounter';

export function AnswerCheckList() {
  const {
    query: { quizIdParams },
  } = useRouter();
  const [isFold, setIsFold] = useState(false);

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizReplyById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quiz) {
    return null;
  }

  if (!quizzes || !user) {
    return null;
  }

  const peerAnswers = quizzes.quizReplyHistories.filter(element => element.creator.nickname !== user.nickname);
  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));
  if (durationTime <= 0) {
    return (
      <Wrapper>
        <Flex css={{ justifyContent: 'space-between' }}>
          <Text variant="headline" color="gray030">
            우수한 답변
          </Text>
          <Text variant="body02" color="gray050">
            잘한다잘한다하니까 너무 잘한다🙊
          </Text>
        </Flex>
        <Spacing size={16} />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Flex direction="column">
          <Flex css={{ justifyContent: 'space-between' }}>
            <Text variant="headline" color="gray030">
              팀원들의 답안 확인
            </Text>
            <DoneNumberNotice done={peerAnswers.length} />
          </Flex>
          <Spacing size={16} />
          {peerAnswers.map(({ answer, creator }) => (
            <AnswerWrapper key={creator.userId}>
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
                    <VoteCounter voteCount={5} />
                  </Flex>
                }
                bodyNodes={
                  <>
                    <Spacing size={22} />
                    <ToastViewer answer={answer} />
                  </>
                }
              />
            </AnswerWrapper>
          ))}
        </Flex>
      </Wrapper>
    );
  }
}
