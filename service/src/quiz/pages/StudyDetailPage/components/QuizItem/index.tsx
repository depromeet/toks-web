import { KeyOfColors, theme } from '@depromeet/theme';
import { Accordion, Avatar, Button, Icon, Quiz, QuizResponse, QuizStatus, Text } from '@depromeet/toks-components';
import { convertSecondToString, getInitialTimerSecond, getQuizItemStatus } from '@depromeet/toks-components/src/utils';
import { useTimer } from '@depromeet/utils';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect, useState } from 'react';

import { Divider } from 'quiz/common/components/Divider';

import { FlexRow, ListItem, Space } from './style';

interface QuizItemProps {
  round: number;
  quiz: Quiz;
  setQuizItemStatus: (quizId: number, newQuizStatus: QuizStatus) => QuizResponse | undefined;
}

const QUIZ_BUTTON_TYPE = {
  CHECK: {
    buttonName: '똑스 확인하기',
    path: (quizId: number) => `/quiz/check/${quizId}`,
  },
  VOTE: {
    buttonName: '똑표하기',
    path: (quizId: number) => `/quiz/vote/${quizId}`,
  },
  SOLVE: {
    buttonName: '똑스 풀기',
    path: (quizId: number) => `/quiz/solve/${quizId}`,
  },
};

const QUIZ_BUTTON_BY_SOLVED = {
  SOLVED: () => QUIZ_BUTTON_TYPE['VOTE'],
  VOTED: () => QUIZ_BUTTON_TYPE['CHECK'],
  NONE: (myQuiz: boolean) => (myQuiz ? QUIZ_BUTTON_TYPE['VOTE'] : QUIZ_BUTTON_TYPE['SOLVE']),
};

const QUIZ_ITEM = {
  DONE: {
    buttonColor: 'general',
    timerColor: 'gray060',
    labelColor: theme.colors.gray120,
    backgroundColor: theme.colors.gray110,
    button: () => QUIZ_BUTTON_TYPE['CHECK'],
  },
  TO_DO: {
    buttonColor: 'primary',
    timerColor: 'primary',
    labelColor: theme.colors.gray110,
    backgroundColor: theme.colors.gray100,
    button: (quizSolvedType: 'SOLVED' | 'VOTED' | 'NONE', myQuiz: boolean) =>
      QUIZ_BUTTON_BY_SOLVED[quizSolvedType](myQuiz),
  },
  IN_PROGRESS: {
    buttonColor: 'primary',
    timerColor: 'primary',
    labelColor: theme.colors.gray110,
    backgroundColor: theme.colors.gray100,
    button: (quizSolvedType: 'SOLVED' | 'VOTED' | 'NONE', myQuiz: boolean) =>
      QUIZ_BUTTON_BY_SOLVED[quizSolvedType](myQuiz),
  },
};

export function QuizItem({ round, quiz, setQuizItemStatus }: QuizItemProps) {
  const {
    quizId,
    endedAt,
    startedAt,
    timestamp,
    durationOfSecond,
    quizStatus,
    myQuiz,
    quizSolveStep,
    question: title,
    creator,
    unSubmitters,
  } = quiz;
  const [limitDate, openDate, currentDate] = [new Date(endedAt), new Date(startedAt), new Date(timestamp)];
  const initialTime = getInitialTimerSecond(currentDate, durationOfSecond, limitDate, quizStatus);
  const { time, start: timerStart, stop: timerStop } = useTimer({ time: initialTime, enabled: false });

  const [isFold, setIsFold] = useState(quizStatus === 'DONE');

  const router = useRouter();

  // 임시!
  // NONE => SOLVED => VOTED
  // const quizSolveStep = "" // "VOTED", "NONE"

  useEffect(() => {
    if (time === 0 && quizStatus !== 'DONE') {
      timerStop();
      setQuizItemStatus(quizId, 'DONE');
    }
  }, [time, quizId, quizStatus, timerStop, setQuizItemStatus]);

  useEffect(() => {
    if (quizStatus === 'IN_PROGRESS') {
      timerStart();
    }
  }, [quizStatus, timerStart]);

  // // TO_DO => IN_PROGRESS를 감지하기 위한 useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const newQuizItemStatus = getQuizItemStatus(openDate, limitDate);
      if (newQuizItemStatus === 'IN_PROGRESS') {
        setQuizItemStatus(quizId, newQuizItemStatus);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [openDate, limitDate, quizId, setQuizItemStatus]);

  return (
    <ListItem>
      <Accordion
        isFold={isFold}
        onFold={event => {
          if ((event.target as Element).closest('button')) {
            return;
          }
          setIsFold(!isFold);
        }}
        accordionStyle={{
          padding: '22px 28px',
        }}
        backgroundColor={QUIZ_ITEM[quizStatus].backgroundColor}
        headerNodes={
          <>
            <Text variant="subhead" css={{ margin: '0' }} as="h6">
              {round}회차
            </Text>
            <Text
              variant="headline"
              css={{
                maxWidth: '46%',
                margin: '0 0 0 18px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              as="h5"
            >
              {title}
            </Text>
            {myQuiz && (
              <Text
                variant="body03"
                color="gray030"
                css={{
                  padding: '4px 12px',
                  backgroundColor: QUIZ_ITEM[quizStatus].labelColor,
                  borderRadius: '16px',
                  marginLeft: '18px',
                }}
              >
                내가 만든 똑스
              </Text>
            )}
            <Space css={{ flex: 1 }} />
            {quizStatus === 'TO_DO' && (
              <Text color="primary" variant="body02" css={{ marginRight: '18px' }}>
                기다려주세요!
              </Text>
            )}
            <Button
              type={QUIZ_ITEM[quizStatus].buttonColor as ComponentProps<typeof Button>['type']}
              width={140}
              disabled={quizStatus === 'TO_DO'}
              size="medium"
              onClick={() => {
                router.push(QUIZ_ITEM[quizStatus].button(quizSolveStep, myQuiz).path(quizId));
              }}
            >
              {QUIZ_ITEM[quizStatus].button(quizSolveStep, myQuiz).buttonName}
            </Button>
          </>
        }
        bodyNodes={
          <>
            <FlexRow css={{ marginTop: '36px' }}>
              <Icon iconName="ic-time" css={{ marginLeft: '3.2px' }} />
              <Text
                variant="title04"
                color={QUIZ_ITEM[quizStatus].timerColor as KeyOfColors}
                css={{ margin: '0 0 0 9.2px' }}
                as="h4"
              >
                {convertSecondToString(time)}
              </Text>
            </FlexRow>
            <Divider css={{ marginTop: '22.25px' }} />
            <FlexRow css={{ marginTop: '14px' }}>
              <Text variant="subhead" css={{ margin: '0 24px 0 0' }} as="h6">
                똑스 만든사람
              </Text>
              <Avatar src={creator.profileImageUrl} tooltipContent={creator.nickname} size="medium" alt="제작자" />
              <Space css={{ flex: 1 }} />
              <FlexRow
                css={{
                  gap: '12px',
                }}
              >
                {unSubmitters.length !== 0 && (
                  <Text variant="subhead" css={{ margin: '0' }} as="h6">
                    똑스 안 푼 사람
                  </Text>
                )}
                <Avatar.Group size="medium">
                  {unSubmitters.map(({ userId, profileImageUrl, nickname }) => (
                    <Avatar key={userId} src={profileImageUrl} tooltipContent={nickname} alt={nickname} />
                  ))}
                </Avatar.Group>
              </FlexRow>
            </FlexRow>
          </>
        }
      />
    </ListItem>
  );
}
