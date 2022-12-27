import { Flex, Spacing } from '@toss/emotion-utils';
import { QuizNav } from 'common/components/QuizNav';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizSolvingBox } from './components/QuizSolvingBox';

export default function QuizSolvingPage() {
  return (
    <>
      <QuizNav mainTitle="똑스 풀기" />
      <Spacing size={25} />
      <Flex>
        <QuizQuestion />
        <QuizSolvingBox />
      </Flex>
    </>
  );
}
