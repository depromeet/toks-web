import { theme } from '@depromeet/theme';
import { Button, Image, Text } from '@depromeet/toks-components';
import { ComponentProps, Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Divider } from 'components/common/Divider';

import { FlexRow, Item, ItemBody, ItemDetails, ItemHeader } from './style';

type User = {
  image: string;
  id: string;
  userName: string;
  size?: string;
};

interface QuizItemProps {
  index: number;
  weekNumber: number;
  title: string;
  openDate: Date;
  limitTime: string;
  creator: User;
  absentee: User[];
  setAddQuizState: Dispatch<SetStateAction<boolean>>;
}

type QuizStatus = 'default' | 'disabled' | 'activated';

type QuizItemColorMap = {
  [key in QuizStatus]: {
    button: ComponentProps<typeof Button>['type'];
    timer:  ComponentProps<typeof Text>['color'];
  };
};

const QUIZ_ITEM_COLOR: QuizItemColorMap = {
  default: {
    button: 'general',
    timer: "gray060",
  },
  disabled: {
    button: 'primary',
    timer: 'primary',
  },
  activated: {
    button: 'primary',
    timer: 'primary',
  },
};

const parseTimeStr = (timeStr: string) => [...timeStr.split(':').map(Number)];

const getLimitDate = (openDate: Date, limitTime: string) => {
  const [hour, minute, second] = parseTimeStr(limitTime);
  const limitDate = new Date(openDate);
  limitDate.setHours(limitDate.getHours() + hour);
  limitDate.setMinutes(limitDate.getMinutes() + minute);
  limitDate.setSeconds(limitDate.getSeconds() + second);
  return limitDate;
};

const getQuizItemType = (openDate: Date, limitDate: Date) => {
  const currentDate = new Date();

  if (limitDate.getTime() <= currentDate.getTime()) {
    return 'default';
  } else if (currentDate.getTime() < openDate.getTime()) {
    return 'disabled';
  } else {
    return 'activated';
  }
};

const getTimerByQuizType = (quizItemType: QuizStatus, limitTime: string, limitDate: Date) => {
  if (quizItemType === 'default') {
    return '00:00:00';
  } else if (quizItemType === 'disabled') {
    return limitTime;
  } else {
    return calculateRemainingTimerValue(limitDate);
  }
};

const convertTimeFormat = (num: number) => (num < 10 ? `0${num}` : num);

const calculateRemainingTimerValue = (limitDate: Date) => {
  let remainingTime = limitDate.getTime() - new Date().getTime();
  if (remainingTime <= 0) {
    return '00:00:00';
  }

  const day = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  remainingTime -= day * (1000 * 60 * 60 * 24);
  const hour = Math.floor(remainingTime / (1000 * 60 * 60));
  remainingTime -= hour * (1000 * 60 * 60);
  const minute = Math.floor(remainingTime / (1000 * 60));
  remainingTime -= minute * (1000 * 60);
  const second = Math.floor(remainingTime / 1000);

  return `${convertTimeFormat(hour)}:${convertTimeFormat(minute)}:${convertTimeFormat(second)}`;
};

// TODO: 아이콘들 Image로 되어있는것 추후 Icon 컴포넌트로 변경해야 함
// TODO: 카운트 돌아가고 있을시 첫 렌더링에 반영되도록 해야함.
// TODO: 퀴즈 추가 버튼 1초 늦게 나오는 문제 해결해야 함,,,
// TODO: 버튼의 disabled 상태 추가해야 함
export function QuizItem({
  index,
  weekNumber,
  title,
  openDate,
  limitTime,
  creator,
  absentee,
  setAddQuizState,
}: QuizItemProps) {
  const limitDate = getLimitDate(openDate, limitTime);
  const [quizItemType, setQuizItemType] = useState(getQuizItemType(openDate, limitDate) as QuizStatus);
  const [timer, setTimer] = useState(quizItemType === 'default' ? '00:00:00' : limitTime); //useState(getTimerByQuizType(quizItemType, limitTime, limitDate));
  const [isFold, setIsFold] = useState(quizItemType !== 'default');

  // TODO: Avatar 적용해야 함...
  creator;
  absentee;

  useEffect(() => {
    const interval = setInterval(() => {
      setQuizItemType(getQuizItemType(openDate, limitDate));
      setTimer(getTimerByQuizType(quizItemType, limitTime, limitDate));
      if (index === 0 && quizItemType === 'default') {
        setAddQuizState(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const onFold = () => setIsFold(!isFold);

  return (
    <Item css={{ backgroundColor: theme.colors.gray110 }}>
      <ItemDetails open={isFold} onToggle={onFold}>
        <ItemHeader>
          <Text variant="subhead" css={{ margin: '0' }} as="h6">
            {weekNumber}회차
          </Text>
          <Text variant="headline" css={{ margin: '0 0 0 18px', flex: 1 }} as="h5">
            {title}
          </Text>
          <Button type={QUIZ_ITEM_COLOR[quizItemType].button} size="medium">
            똑스 확인하기
          </Button>
          {isFold ? (
            <Image
              width={16}
              height={9}
              src="https://toks-web-assets.s3.amazonaws.com/ic-chevron-top.svg"
              alt="닫기 버튼 입니다."
              css={{ marginLeft: '24px' }}
            />
          ) : (
            <Image
              width={16}
              height={9}
              src="https://toks-web-assets.s3.amazonaws.com/ic-bottom-chevron.svg"
              alt="펼치기 버튼 입니다."
              css={{ marginLeft: '24px' }}
            />
          )}
        </ItemHeader>
        <ItemBody>
          <FlexRow css={{ marginTop: '36px' }}>
            <Image
              width={20.17}
              height={20.17}
              src="https://toks-web-assets.s3.amazonaws.com/ic-timer.svg"
              alt="펼치기 버튼 입니다."
              css={{ marginLeft: '3.2px' }}
            />
            <Text variant="title04" color={QUIZ_ITEM_COLOR[quizItemType].timer} css={{ margin: '0 0 0 9.2px' }} as="h4">
              {timer}
            </Text>
          </FlexRow>
          <Divider css={{ marginTop: '22.25px' }} />
          <FlexRow css={{ marginTop: '14px' }}>
            <Text variant="subhead" css={{ margin: '0', flex: 1 }} as="h6">
              똑스 만든사람
            </Text>
            <Text variant="subhead" css={{ margin: '0' }} as="h6">
              똑스 안 푼 사람
            </Text>
          </FlexRow>
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
