import { theme } from '@depromeet/theme';
import { colors } from '@depromeet/theme/dist/colors';
import { Button, Image, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { ComponentProps, HTMLAttributes, ReactNode } from 'react';
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

// TODO: 아이콘들 Image로 되어있는것 추후 Icon 컴포넌트로 변경해야 함
export function QuizItem({ weekNumber, title, openDate, creator, absentee } : QuizItemProps) {
  const quizItemType = "default";

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
          <FlexRow>
            <Image width={20.17} height={20.17} src='https://toks-web-assets.s3.amazonaws.com/ic-timer.svg' alt='펼치기 버튼 입니다.' css={{marginLeft: '3.2px'}}/>
            <Text variant='title04' css={{margin: '0 0 0 9.2px', color: `${QUIZ_ITEM_COLOR[quizItemType].timer}`}} as='h4'>02:00:00</Text>
          </FlexRow>
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
