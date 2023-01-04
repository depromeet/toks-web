import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Accordion, Text, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { getUser } from 'common/remotes/user';
import { useState } from 'react';
import { theme } from '@depromeet/theme';
import { AnswerWrapper, Wrapper } from './style';
import { VoteCounter } from '../VoteCounter';
import { getSortedQuizReplyById } from 'pages/QuizCheckingPage/remotes/sortingQuizAply';

export function AnswerCheckList() {
  const {
    query: { quizIdParams },
  } = useRouter();
  const [isFold, setIsFold] = useState(false);
  const [isRestAnswerFold, setIsRestAnswerFold] = useState(true);

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: sortedQuizReplies } = useQuery(
    QUERY_KEYS.GET_SORTED_QUIZREPLY,
    () => getSortedQuizReplyById(quizIdParams),
    {
      enabled: Boolean(quizIdParams),
    }
  );

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quiz) {
    return null;
  }

  if (!sortedQuizReplies || !user) {
    return null;
  }
  // console.log(sortedQuizReplies);
  // console.log(user);

  const sortedPeerAnswers = sortedQuizReplies.quizReplyHistories.filter(
    element => element.creator.nickname !== user.nickname
  );

  const bestAnswer = sortedQuizReplies.quizReplyHistories[0];
  const restAnswer = sortedQuizReplies.quizReplyHistories.filter(
    element => element.quizReplyHistoryId !== bestAnswer.quizReplyHistoryId
  );
  // console.log('rest', restAnswer);
  // console.log('best', bestAnswer);
  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));
  // const durationTime = 1;
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
                <UserAvatar image={bestAnswer.creator.profileImageUrl} size="large" />
                <Text css={{ marginLeft: '12px' }} variant="subhead" color="gray020">
                  {bestAnswer.creator.nickname}
                </Text>
              </Flex>
              <VoteCounter voteCount={bestAnswer.likeNumber} />
            </Flex>
          }
          bodyNodes={
            <>
              <Spacing size={22} />
              <ToastViewer answer={bestAnswer.answer} />
            </>
          }
        />
        <Spacing size={90} />
        <Flex css={{ justifyContent: 'space-between' }}>
          <Text variant="headline" color="gray030">
            팀원들의 답안 확인
          </Text>
          <Text variant="body02" color="gray050">
            울지말고 강해져라..!👊🏻
          </Text>
        </Flex>
        <Spacing size={16} />
        {restAnswer.map(({ answer, likeNumber, creator }) => (
          <AnswerWrapper key={creator.userId}>
            <Accordion
              isFold={isRestAnswerFold}
              onFold={() => setIsRestAnswerFold(prev => !prev)}
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
                  <VoteCounter voteCount={likeNumber} />
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
            <DoneNumberNotice done={sortedPeerAnswers.length} />
          </Flex>
          <Spacing size={16} />
          {sortedPeerAnswers.map(({ answer, likeNumber, creator }) => (
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
                    <VoteCounter voteCount={likeNumber} />
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
