import { KeyOfColors, theme } from '@depromeet/theme';
import { Button, Icon, QuizResponse, QuizStatus, Text, UserAvatar } from '@depromeet/toks-components';
import { convertSecondToString, getInitialTimerSecond, getQuizItemStatus } from '@depromeet/toks-components/src/utils';
import { useTimer } from '@depromeet/utils';
import { ComponentProps, useEffect, useState } from 'react';

import { Divider } from 'common/components/Divider';

import { FlexRow, Item, ItemBody, ItemDetails, ItemHeader, Space } from './style';

interface QuizItemProps {
  round: number;
  quiz: QuizResponse;
  setQuizItemStatus: (quizId: number, newQuizStatus: QuizStatus) => QuizResponse[] | undefined;
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

export function QuizItem({ round, quiz, setQuizItemStatus }: QuizItemProps) {
  const {
    quizId,
    endedAt,
    startedAt,
    timestamp,
    durationOfSecond,
    quizStatus,
    quiz: title,
    creator,
    unSubmitters,
  } = quiz;
  const [limitDate, openDate, currentDate] = [new Date(endedAt), new Date(startedAt), new Date(timestamp)];
  const initialTime = getInitialTimerSecond(currentDate, durationOfSecond, limitDate, quizStatus);
  const { time, start: timerStart, stop: timerStop } = useTimer({ time: initialTime, enabled: false });

  const [isFold, setIsFold] = useState(quizStatus !== 'DONE');
  const onFold = () => setIsFold(!isFold);

  useEffect(() => {
    if (time === 0) {
      timerStop();
      setQuizItemStatus(quizId, 'DONE');
    }
  }, [time, quizId, timerStop, setQuizItemStatus]);

  useEffect(() => {
    if (quizStatus === 'IN_PROGRESS') {
      timerStart();
    }
  }, [quizStatus, timerStart]);

  // TO_DO => IN_PROGRESS를 감지하기 위한 useEffect
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
    <Item css={{ backgroundColor: theme.colors.gray110 }}>
      <ItemDetails open={isFold} onToggle={onFold}>
        <ItemHeader>
          <Text variant="subhead" css={{ margin: '0' }} as="h6">
            {round}회차
          </Text>
          <Text variant="headline" css={{ margin: '0 0 0 18px', flex: 1 }} as="h5">
            {title}
          </Text>
          {quizStatus === 'TO_DO' && (
            <Text color="primary" variant="body02" css={{ margin: '0 18px 0 0' }}>
              기다려주세요!
            </Text>
          )}
          <Button type={QUIZ_ITEM_COLOR[quizStatus].button} width={140} disabled={quizStatus === 'TO_DO'} size="medium">
            똑스 확인하기
          </Button>
          {isFold ? (
            <Icon iconName="ic-chevron-up" css={{ marginLeft: '24px' }} />
          ) : (
            <Icon iconName="ic-chevron-down" css={{ marginLeft: '24px' }} />
          )}
        </ItemHeader>
        <ItemBody>
          <FlexRow css={{ marginTop: '36px' }}>
            <Icon iconName="ic-time" css={{ marginLeft: '3.2px' }} />
            <Text variant="title04" color={QUIZ_ITEM_COLOR[quizStatus].timer} css={{ margin: '0 0 0 9.2px' }} as="h4">
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
            <UserAvatar.Group view={6} id="8" groupType="quiz" css={{ margin: '0 0 0 22px' }}>
              {unSubmitters.map(user => (
                <UserAvatar
                  key={user.userId}
                  image={user.profileImageUrl}
                  userName={user.nickname}
                  size="large"
                  className={`avatar--user_${user.userId}`}
                  tooltip={true}
                />
              ))}
            </UserAvatar.Group>
          </FlexRow>
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
