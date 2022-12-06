import { theme } from '@depromeet/theme';
import { Image, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { useState } from 'react';

import { QuizItem } from 'components/StudyDetailPage/QuizItem';

import { List } from './style';

const creator = {
  image: 'https://asset.tokstudy.com/img_penguin.png',
  id: '13',
  userName: '윤두현',
  size: 'large',
};

const absentee = [
  {
    image: 'https://asset.tokstudy.com/img_penguin.png',
    id: '13',
    userName: '윤두현',
    size: 'large',
  },
  {
    image: 'https://asset.tokstudy.com/img_penguin.png',
    id: '14',
    userName: '현두윤',
    size: 'large',
  },
  {
    image: 'https://asset.tokstudy.com/img_penguin.png',
    id: '15',
    userName: '두현윤',
    size: 'large',
  },
];

type User = {
  image: string;
  id: string;
  userName: string;
  size?: string;
};

interface QuizItem {
  quizId: number;
  weekNumber: number;
  title: string;
  openDate: Date;
  limitTime: string;
  creator: User;
  absentee: User[];
}

const quizList: QuizItem[] = [
  {
    quizId: 33,
    weekNumber: 3,
    title: '퀴즈가 진행되고 있는 스터디 입니다',
    openDate: new Date('2022-12-06 01:25:00'),
    limitTime: '02:00:00',
    creator,
    absentee,
  },
  {
    quizId: 22,
    weekNumber: 2,
    title: '만료된 스터디 입니다 22',
    openDate: new Date('2022-12-05 05:10:00'),
    limitTime: '02:15:00',
    creator,
    absentee,
  },
  {
    quizId: 11,
    weekNumber: 1,
    title: '만료된 스터디 입니다',
    openDate: new Date('2022-11-27 10:00:00'),
    limitTime: '02:00:00',
    creator,
    absentee,
  },
];

const parseTimeStr = (timeStr: string) => [...timeStr.split(':').map(Number)];

const getLimitDate = (openDate: Date, limitTime: string) => {
  const [hour, minute, second] = parseTimeStr(limitTime);
  const limitDate = new Date(openDate);
  limitDate.setHours(limitDate.getHours() + hour);
  limitDate.setMinutes(limitDate.getMinutes() + minute);
  limitDate.setSeconds(limitDate.getSeconds() + second);
  return limitDate;
};

const isExistQuizToSolve = (openDate: Date, limitTime: string) => {
  const limitDate = getLimitDate(openDate, limitTime);
  const currentDate = new Date();
  return limitDate.getTime() <= currentDate.getTime();
};

const AddButton = styled.button`
  width: 982px;
  height: 54px;
  margin-bottom: 12px;
  border-radius: 16px;
  border: 1.4px solid ${theme.colors.gray080};
  background-color: ${theme.colors.gray120};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuizAddButton = () => (
  <AddButton>
    <Image
      width={24}
      height={24}
      src="https://toks-web-assets.s3.amazonaws.com/ic-plus.svg"
      alt="퀴즈 추가 버튼 입니다."
    />
    <Text variant="headline" color='gray010' css={{ margin: '0 0 0 10px' }} as="h5">
      똑스 만들기
    </Text>
  </AddButton>
);

export function QuizList() {
  const isEmptyQuizList = quizList.length === 0;
  const firstQuizItem = quizList[0];
  const [addQuizState, setAddQuizState] = useState(
    firstQuizItem && isExistQuizToSolve(firstQuizItem.openDate, firstQuizItem.limitTime)
  );

  return (
    <List>
      <li>{isEmptyQuizList || addQuizState ? QuizAddButton() : null}</li>
      {isEmptyQuizList
        ? null
        : quizList.map((quizItem, index) => (
            <QuizItem
              key={quizItem.quizId}
              index={index}
              weekNumber={quizItem.weekNumber}
              title={quizItem.title}
              openDate={quizItem.openDate}
              limitTime={quizItem.limitTime}
              creator={quizItem.creator}
              absentee={quizItem.absentee}
              setAddQuizState={setAddQuizState}
            />
          ))}
    </List>
  );
}
