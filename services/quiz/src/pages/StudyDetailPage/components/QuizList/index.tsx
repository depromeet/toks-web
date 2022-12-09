import { theme } from '@depromeet/theme';
import { Image, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { QuizItem } from '../../components/QuizItem';
import { useState } from 'react';

import { isExistQuizToSolve } from '../../../../../utils/quizUtils';
import { User, absentee, creator } from '../../../../../utils/userUtils';
import { List } from './style';

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
    openDate: new Date('2022-12-07 17:45:00'),
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

const AddButton = styled.button`
  display: block;
  width: 100%;
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
    <Text variant="headline" color="gray010" css={{ margin: '0 0 0 10px' }} as="h5">
      똑스 만들기
    </Text>
  </AddButton>
);

export function QuizList() {
  const firstQuizItem = quizList[0];
  const [addQuizState, setAddQuizState] = useState(
    firstQuizItem && isExistQuizToSolve(firstQuizItem.openDate, firstQuizItem.limitTime)
  );

  return (
    <List>
      <li>{addQuizState ? <QuizAddButton /> : null}</li>
      {firstQuizItem
        ? quizList.map((quizItem, index) => (
            <QuizItem key={quizItem.quizId} index={index} {...quizItem} setAddQuizState={setAddQuizState} />
          ))
        : null}
    </List>
  );
}
