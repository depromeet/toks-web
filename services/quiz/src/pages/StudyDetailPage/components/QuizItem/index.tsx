import { KeyOfColors, theme } from '@depromeet/theme';
import { Accordion, Button, Icon, QuizResponse, QuizStatus, Text, UserAvatar } from '@depromeet/toks-components';
import { convertSecondToString, getInitialTimerSecond, getQuizItemStatus } from '@depromeet/toks-components/src/utils';
import { useTimer } from '@depromeet/utils';
import { ComponentProps, useEffect, useState } from 'react';

import { Divider } from 'components/common/Divider';

import { FlexRow, ListItem, Space } from './style';

interface QuizItemProps {
  round: number;
  quiz: QuizResponse;
}

type QuizItemColorMap = {
  [key in QuizStatus]: {
    button: ComponentProps<typeof Button>['type'];
    timer: KeyOfColors;
  };
};

const QUIZ_ITEM_COLOR: QuizItemColorMap = {
  DONE: {
    button: 'general',
    timer: 'gray060',
  },
  TO_DO: {
    button: 'primary',
    timer: 'primary',
  },
  IN_PROGRESS: {
    button: 'primary',
    timer: 'primary',
  },
};

// TODO: 카운트 돌아가고 있을시 첫 렌더링에 반영되도록 해야함.
// TODO: 퀴즈 추가 버튼 1초 늦게 나오는 문제 해결해야 함,,,
export function QuizItem({ round, quiz }: QuizItemProps) {
  const { endedAt, startedAt, timestamp, durationOfSecond, quizStatus, quiz: title, creator, unSubmitters } = quiz;
  const [limitDate, openDate, currentDate] = [new Date(endedAt), new Date(startedAt), new Date(timestamp)];
  const [quizItemStatus, setQuizItemStatus] = useState(quizStatus);
  const initialTime = getInitialTimerSecond(currentDate, durationOfSecond, limitDate, quizStatus);
  const { time, start: timerStart, stop: timerStop } = useTimer({ time: initialTime, enabled: false });

  useEffect(() => {
    if (time === 0) {
      timerStop();
      setQuizItemStatus('DONE');
    }
  }, [time, timerStop]);

  useEffect(() => {
    if (quizItemStatus === 'IN_PROGRESS') {
      timerStart();
    }
  }, [quizItemStatus, timerStart]);

  // TODO: useInterval 사용으로 추후 변경해봐야 함
  useEffect(() => {
    const interval = setInterval(() => {
      const newQuizItemStatus = getQuizItemStatus(openDate, limitDate);
      if (newQuizItemStatus === 'IN_PROGRESS') {
        setQuizItemStatus(newQuizItemStatus);
      }
      // if (time === 0) {
      //   setQuizItemStatus('DONE');
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, [openDate, limitDate, quiz]);

  return (
    <ListItem>
      <Accordion
        initIsFold={quizStatus !== 'DONE'}
        backgroundColor={theme.colors.gray110}
        headerNodes={
          <>
            <Text variant="subhead" css={{ margin: '0' }} as="h6">
              {round}회차
            </Text>
            <Text variant="headline" css={{ marginLeft: '18px', flex: 1 }} as="h5">
              {title}
            </Text>
            {quizItemStatus === 'TO_DO' && (
              <Text color="primary" variant="body02" css={{ marginRight: '18px' }}>
                기다려주세요!
              </Text>
            )}
            <Button
              type={QUIZ_ITEM_COLOR[quizItemStatus].button}
              width={140}
              disabled={quizItemStatus === 'TO_DO'}
              size="medium"
            >
              똑스 확인하기
            </Button>
          </>
        }
        bodyNodes={
          <>
            <FlexRow css={{ marginTop: '36px' }}>
              <Icon iconName="ic-time" css={{ marginLeft: '3.2px' }} />
              <Text
                variant="title04"
                color={QUIZ_ITEM_COLOR[quizItemStatus].timer}
                css={{ marginLeft: '9.2px' }}
                as="h4"
              >
                {convertSecondToString(time)}
              </Text>
            </FlexRow>
            <Divider css={{ marginTop: '22.25px' }} />
            <FlexRow css={{ marginTop: '14px' }}>
              <Text variant="subhead" css={{ margin: '0 0 0 0' }} as="h6">
                똑스 만든사람
              </Text>
              <UserAvatar
                image={creator.profileImageUrl}
                userName={creator.nickname}
                css={{ margin: '0 0 0 22px' }}
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
