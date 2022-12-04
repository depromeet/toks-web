import { theme } from '@depromeet/theme';
import { Button, Image, Text } from '@depromeet/toks-components';
import { Divider } from 'components/common/Divider';
import { Timer } from 'components/common/Timer';
import { ComponentProps, useState, useEffect } from 'react';
import { Item, ItemDetails, ItemHeader, ItemBody, FlexRow } from './style';

type User = {
    image: string;
    id: string;
    userName: string;
    size?: string;
}

interface QuizItemProps {
    weekNumber: number;
    title: string;
    openDate: Date;
    limitTime: string;
    creator: User;
    absentee: User[];
}

type QuizStatus = 'default' | 'disabled' | 'activated';

type QuizItemColorMap = {
  [key in QuizStatus]: {
    button: ComponentProps<typeof Button>["type"];
    timer: string;
  };
};

const QUIZ_ITEM_COLOR: QuizItemColorMap = {
  default: {
    button: 'general',
    timer: `${theme.colors.gray060}`
  },
  disabled: {
    button: 'primary',
    timer: `${theme.colors.primary}`
  },
  activated: {
    button: 'primary',
    timer: `${theme.colors.primary}`
  },
};

// const getRemainerPeriod = (endDate, today) =>
//   endDate.getTime() - today.getTime();

// const getObjectRemainderPeriod = (time) => {
//   const day = parseInt(time / (1000 * 60 * 60 * 24));
//   time -= day * (1000 * 60 * 60 * 24);
//   const hour = parseInt(time / (1000 * 60 * 60));
//   time -= hour * (1000 * 60 * 60);
//   const minute = parseInt(time / (1000 * 60));
//   time -= minute * (1000 * 60);
//   const second = parseInt(time / 1000);

//   return { day, hour, minute, second };
// };

const parseTimeStr = (timeStr : string) => [...timeStr.split(":").map(Number)];

const getLimitDate = (openDate : Date, limitTime : string) => {
  const [hour, minute, second] = parseTimeStr(limitTime);
  const limitDate = new Date(openDate);
  limitDate.setHours(limitDate.getHours() + hour);
  limitDate.setMinutes(limitDate.getMinutes() + minute);
  limitDate.setSeconds(limitDate.getSeconds() + second);
  return limitDate;
}

const getQuizItemType = (openDate: Date, limitDate : Date) => {
  const currentDate = new Date();

  if (limitDate.getTime() <= currentDate.getTime()) {
    return "default";
  } else if (currentDate.getTime() < openDate.getTime()) {
    return "disabled";
  } else {
    return "activated";
  }
}  
  

// TODO: 아이콘들 Image로 되어있는것 추후 Icon 컴포넌트로 변경해야 함
export function QuizItem({ weekNumber, title, openDate, limitTime, creator, absentee } : QuizItemProps) {
  const limitDate = getLimitDate(openDate, limitTime);
  const [quizItemType, setQuizItemType] = useState(getQuizItemType(openDate, limitDate) as QuizStatus);
  const [timer, useTimer] = useState((quizItemType === "default")? "00:00:00" : limitTime)

  useEffect(() => {
    const interval = setInterval(
      () =>
        setQuizItemType(getQuizItemType(openDate, limitDate))
      ,1000
    );

    return () => clearInterval(interval);
  });

  return (
    <Item css={{backgroundColor: theme.colors.gray110}}>
      <ItemDetails>
        <ItemHeader>
          <Text variant='subhead' css={{margin: '0'}} as='h6'>{weekNumber}회차</Text>
          <Text variant='headline' css={{margin: '0 0 0 18px', flex: 1}} as='h5'>{title}</Text>
          <Button type={QUIZ_ITEM_COLOR[quizItemType].button} size='medium'>똑스 확인하기</Button>
          <Image width={16} height={9} src='https://toks-web-assets.s3.amazonaws.com/ic-bottom-chevron.svg' alt='펼치기 버튼 입니다.' css={{marginLeft: '24px'}}/>
        </ItemHeader>
        <ItemBody>
          <FlexRow css={{marginTop: '36px'}}>
            <Image width={20.17} height={20.17} src='https://toks-web-assets.s3.amazonaws.com/ic-timer.svg' alt='펼치기 버튼 입니다.' css={{marginLeft: '3.2px'}}/>
            {/* <Timer quizItemType={quizItemType} limitTime={limitTime} css={{margin: '0 0 0 9.2px'}}/> */}
            <Text variant='title04' color={QUIZ_ITEM_COLOR[quizItemType].timer} css={{margin: '0 0 0 9.2px'}} as='h4'>{timer}</Text>
          </FlexRow>
          <Divider css={{marginTop: '22.25px'}}/>
          <FlexRow css={{marginTop: '14px'}}>
            <Text variant='subhead' css={{margin: '0', flex: 1}} as='h6'>똑스 만든사람</Text>
            <Text variant='subhead' css={{margin: '0'}} as='h6'>똑스 안 푼 사람</Text>
          </FlexRow>
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
