import { theme } from '@depromeet/theme';
import { Button, Image, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import { Item, ItemDetails, ItemHeader, ItemBody } from './style';

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

export function QuizItem({ weekNumber, title, openDate, creator, absentee } : QuizItemProps) {
  return (
    <Item css={{backgroundColor: theme.colors.gray110}}>
      <ItemDetails>
        <ItemHeader>
          <Text variant='subhead' css={{margin: '0'}} as='h6'>{weekNumber}회차</Text>
          <Text variant='headline' css={{margin: '0 0 0 18px', flex: 1}} as='h5'>{title}</Text>
          <Button type="general" size='medium'>똑스 확인하기</Button>
          <Image width={16} height={9} src='https://toks-web-assets.s3.amazonaws.com/ic-bottom-chevron.svg' alt='펼치기 버튼 입니다.' css={{marginLeft: '24px'}}/>
        </ItemHeader>
        <ItemBody>
          body
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
