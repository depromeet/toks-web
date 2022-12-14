import { Text } from '@depromeet/toks-components';
import { usePathParam, useTimer } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { DoneNumberNotice } from 'quiz/common/components/DoneNumberNotice';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { getSortedQuizReplyById } from 'quiz/pages/QuizCheckingPage/remotes/sortingQuizAply';

import { AnswerCheckItem } from '../AnswerCheckItem';
import { EmptyAnswer } from '../EmptyAnswer';
import { AnswerWrapper, AnswerWrapperDuringQuiz, Wrapper } from './style';

export function AnswerCheckList({ durationTime }: { durationTime: number }) {
  const [isQuizClosed, setIsQuizClosed] = useState(false);

  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { time, stop: timerStop } = useTimer({
    time: durationTime,
  });

  useEffect(() => {
    if (time === 0 || time < 0) {
      timerStop();
      setIsQuizClosed(true);
    }
  }, [time, timerStop]);

  const { data: sortedQuizReplies } = useQuery(
    QUERY_KEYS.GET_SORTED_QUIZREPLY(quizIdParams),
    () => getSortedQuizReplyById(quizIdParams),
    {
      enabled: Boolean(quizIdParams),
    }
  );

  if (!sortedQuizReplies) {
    return <EmptyAnswer />;
  }

  const bestAnswer = sortedQuizReplies.quizReplyHistories[0];

  const restAnswer = sortedQuizReplies.quizReplyHistories.filter(
    element => element.quizReplyHistoryId !== bestAnswer.quizReplyHistoryId
  );

  if (!bestAnswer || !restAnswer) {
    return <EmptyAnswer />;
  }

  if (isQuizClosed) {
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
        <Spacing size={'12px'} />
        <AnswerCheckItem
          creator={bestAnswer?.creator}
          answer={bestAnswer?.answer}
          likeCount={bestAnswer?.likeCount}
          isFold={false}
        />
        <Spacing size={'90px'} />
        <Flex css={{ justifyContent: 'space-between' }}>
          <Text variant="headline" color="gray030">
            팀원들의 답안 확인
          </Text>
          <Text variant="body02" color="gray050">
            울지말고 강해져라..!👊🏻
          </Text>
        </Flex>
        <Spacing size={'16px'} />
        <AnswerWrapper>
          {restAnswer.map(({ answer, likeCount, creator }) => (
            <AnswerCheckItem
              key={creator?.userId}
              answer={answer}
              likeCount={likeCount}
              creator={creator}
              isFold={true}
            />
          ))}
        </AnswerWrapper>
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
            <DoneNumberNotice done={sortedQuizReplies.quizReplyHistories.length} />
          </Flex>
          <Flex direction="column" css={{ overflow: 'auto' }}>
            <Spacing size={'12px'} />
            <AnswerWrapperDuringQuiz>
              {sortedQuizReplies.quizReplyHistories.map(({ answer, likeCount, creator }) => (
                <AnswerCheckItem
                  key={creator?.userId}
                  answer={answer}
                  likeCount={likeCount}
                  creator={creator}
                  isFold={false}
                />
              ))}
            </AnswerWrapperDuringQuiz>
          </Flex>
        </Flex>
      </Wrapper>
    );
  }
}
