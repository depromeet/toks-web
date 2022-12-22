import { theme } from '@depromeet/theme';
import { Icon, SSRSuspense, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { ErrorBoundary } from '@toss/error-boundary';
import { useEffect, useState } from 'react';

import { useGetQuizList } from 'pages/StudyDetailPage/hooks/queries/quizList';

import { QuizItem } from '../../components/QuizItem';
import { List } from './style';

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
    <Icon iconName="ic-plus" />
    <Text variant="headline" color="gray010" css={{ margin: '0 0 0 10px' }} as="h5">
      똑스 만들기
    </Text>
  </AddButton>
);

function QuizList() {
  const { data: quizList } = useGetQuizList();

  const isNotQuizEmpty = quizList[0] !== undefined;
  const isAllDone = quizList.every(quiz => quiz.quizStatus === 'DONE');
  const [isAddState, setIsAddState] = useState(!isNotQuizEmpty || (isNotQuizEmpty && isAllDone));

  // TODO: useEffect의 deps를 이용해서 하자니 quizList는 state가 아님 일단은 1초마다 업데이트 하는걸루..
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAddState(quizList.every(quiz => quiz.quizStatus === 'DONE'));
    }, 1000);

    return () => clearInterval(interval);
  }, [quizList]);

  return (
    <List>
      <li>{isAddState ? <QuizAddButton /> : null}</li>
      {isNotQuizEmpty
        ? quizList.map((quizItem, index) => (
            <QuizItem key={quizItem.quizId} round={quizList.length - index + 1} quiz={quizItem} />
          ))
        : null}
    </List>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <QuizList />
    </SSRSuspense>
  </ErrorBoundary>
);
