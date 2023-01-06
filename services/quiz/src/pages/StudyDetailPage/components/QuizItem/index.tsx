import { KeyOfColors, theme } from '@depromeet/theme';
import { Accordion, Button, Icon, Quiz, QuizResponse, QuizStatus, Text, UserAvatar } from '@depromeet/toks-components';
import { convertSecondToString, getInitialTimerSecond, getQuizItemStatus } from '@depromeet/toks-components/src/utils';
import { useTimer } from '@depromeet/utils';
import { useRouter } from 'next/router';
import { ComponentProps, useEffect, useState } from 'react';

import { Divider } from 'common/components/Divider';

import { FlexRow, ListItem, Space } from './style';

interface QuizItemProps {
  round: number;
  quiz: Quiz;
  setQuizItemStatus: (quizId: number, newQuizStatus: QuizStatus) => QuizResponse | undefined;
}

type QuizItemMap = {
  [key in QuizStatus]: {
    buttonColor: ComponentProps<typeof Button>['type'];
    timerColor: KeyOfColors;
    labelColor: string;
    backgroundColor: string;
    buttonName: (myQuiz: boolean) => string;
    path: (quizId: number, myQuiz: boolean) => string;
  };
};

const QUIZ_ITEM: QuizItemMap = {
  DONE: {
    buttonColor: 'general',
    timerColor: 'gray060',
    labelColor: theme.colors.gray120,
    backgroundColor: theme.colors.gray110,
    buttonName: () => '똑스 확인하기',
    path: (quizId: number) => `/vote/${quizId}`,
  },
  TO_DO: {
    buttonColor: 'primary',
    timerColor: 'primary',
    labelColor: theme.colors.gray110,
    backgroundColor: theme.colors.gray100,
    buttonName: (myQuiz: boolean) => myQuiz? '똑표하기' : '똑스 풀기',
    path: (quizId: number, myQuiz: boolean) => myQuiz? `/vote/${quizId}` : `/solve/${quizId}`,
  },
  IN_PROGRESS: {
    buttonColor: 'primary',
    timerColor: 'primary',
    labelColor: theme.colors.gray110,
    backgroundColor: theme.colors.gray100,
    buttonName: (myQuiz: boolean) => myQuiz? '똑표하기' : '똑스 풀기',
    path: (quizId: number, myQuiz: boolean) => myQuiz? `/vote/${quizId}` : `/solve/${quizId}`,
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
    question: title,
    creator,
    unSubmitters,
  } = quiz;
  const [limitDate, openDate, currentDate] = [new Date(endedAt), new Date(startedAt), new Date(timestamp)];
  const initialTime = getInitialTimerSecond(currentDate, durationOfSecond, limitDate, quizStatus);
  const { time, start: timerStart, stop: timerStop } = useTimer({ time: initialTime, enabled: false });

  const [isFold, setIsFold] = useState(quizStatus === 'DONE');
  const onFold = () => setIsFold(!isFold);

  const router = useRouter();

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
        onFold={onFold}
        accordionStyle={{
          padding: '22px 28px',
        }}
        backgroundColor={QUIZ_ITEM[quizStatus].backgroundColor}
        headerNodes={
          <>
            <Text variant="subhead" css={{ margin: '0' }} as="h6">
              {round}회차
            </Text>
            <Text variant="headline" css={{ margin: '0 0 0 18px' }} as="h5">
              {title}
            </Text>
            {myQuiz && 
              <Text 
                variant='body03' 
                color='gray030' 
                css={{
                  padding: '4px 12px', 
                  backgroundColor: QUIZ_ITEM[quizStatus].labelColor,
                  borderRadius: '16px',
                  marginLeft: "18px"
                }}>
                  내가 만든 똑스
              </Text>
            }
            <Space css={{flex: 1}}/>
            {quizStatus === 'TO_DO' && (
              <Text color="primary" variant="body02" css={{ marginRight: '18px' }}>
                기다려주세요!
              </Text>
            )}
            <Button
              type={QUIZ_ITEM[quizStatus].buttonColor}
              width={140}
              disabled={quizStatus === 'TO_DO'}
              size="medium"
              onClick={event => {
                event.stopPropagation();
                router.push(QUIZ_ITEM[quizStatus].path(quizId, myQuiz));
              }}
            >
              {QUIZ_ITEM[quizStatus].buttonName(myQuiz)}
            </Button>
          </>
        }
        bodyNodes={
          <>
            <FlexRow css={{ marginTop: '36px' }}>
              <Icon iconName="ic-time" css={{ marginLeft: '3.2px' }} />
              <Text variant="title04" color={QUIZ_ITEM[quizStatus].timerColor} css={{ margin: '0 0 0 9.2px' }} as="h4">
                {convertSecondToString(time)}
              </Text>
            </FlexRow>
            <Divider css={{ marginTop: '22.25px' }} />
            <FlexRow css={{ marginTop: '14px' }}>
              <Text variant="subhead" css={{ margin: '0' }} as="h6">
                똑스 만든사람
              </Text>
              <UserAvatar
                image={creator.profileImageUrl}
                userName={creator.nickname}
                css={{ marginLeft: '22px' }}
                size="large"
                className={`avatar--user_${creator.userId}`}
                tooltip={true}
              />
              <Space css={{ flex: 1 }} />
              <Text variant="subhead" css={{ margin: '0' }} as="h6">
                똑스 안 푼 사람
              </Text>
              <UserAvatar.Group view={6} id="8" groupType="quiz" css={{ marginLeft: '22px' }}>
                {unSubmitters.map(({ userId, profileImageUrl, nickname }) => (
                  <UserAvatar
                    key={userId}
                    image={profileImageUrl}
                    userName={nickname}
                    size="large"
                    className={`avatar--user_${userId}`}
                    tooltip={true}
                  />
                ))}
              </UserAvatar.Group>
            </FlexRow>
          </>
        }
      />
    </ListItem>
  );
}
