import { theme } from '@depromeet/theme';
import { Image, SSRSuspense, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { ErrorBoundary } from '@toss/error-boundary';
import { useState } from 'react';

import { useGetQuizList } from 'pages/StudyDetailPage/hooks/queries/quizList';
import { isExistQuizToSolve } from 'utils/quizList';

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

function QuizList() {
  const { data: quizList } = useGetQuizList();

  const firstQuizItem = quizList[0];
  const [addQuizState, setAddQuizState] = useState(
    firstQuizItem && isExistQuizToSolve(new Date(firstQuizItem.endedAt))
  );

  // TODO: round가 백엔드에서 내려주는 순서에 맞춰서 변경되어야 함~
  return (
    <List>
      <li>{addQuizState ? <QuizAddButton /> : null}</li>
      {firstQuizItem
        ? quizList.map((quizItem, index) => (
            <QuizItem key={quizItem.quizId} round={index} quiz={quizItem} setAddQuizState={setAddQuizState} />
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
