import { theme } from '@depromeet/theme';
import { Icon, QuizStatus, SSRSuspense, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetQuizList, useSetClientQuizList } from 'pages/StudyDetailPage/hooks/queries/quizList';

import { QuizItem } from '../../components/QuizItem';
import { List } from './style';


interface QuizListProps {
  studyId : string | string[] | undefined
}

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

function QuizList({studyId} : QuizListProps) {
  const { data: quizList, isError} = useGetQuizList(studyId);
  const setQuizList = useSetClientQuizList();

  if (isError || quizList == null) {
    return null;
  }

  const isNotQuizEmpty = quizList[0] !== undefined;
  const isAllDone = quizList && quizList.every(quiz => quiz.quizStatus === 'DONE');
  const isAddableQuiz = !isNotQuizEmpty || (isNotQuizEmpty && isAllDone);

  const setQuizItemStatus = (quizId: number, newQuizStatus: QuizStatus) =>
    setQuizList(quizList.map(quiz => (quizId === quiz.quizId ? { ...quiz, quizStatus: newQuizStatus } : quiz)));

  return (
    <List>
      <li>{isAddableQuiz && <QuizAddButton />}</li>
      {isNotQuizEmpty &&
        quizList && quizList.map((quizItem, index) => (
          <QuizItem
            key={quizItem.quizId}
            round={quizList.length - index}
            quiz={quizItem}
            setQuizItemStatus={setQuizItemStatus}
          />
        ))}
    </List>
  );
}

export default ({studyId} : QuizListProps) => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <QuizList
        studyId={studyId} />
    </SSRSuspense>
  </ErrorBoundary>
);
