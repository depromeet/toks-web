import { Flex, Spacing } from '@toss/emotion-utils';

import { QuizNav } from 'common/components/QuizNav';
import { QuizQuestion } from 'common/components/QuizQuestion';

import { QuizEditor } from './components/QuizEditor';

export default function QuizSolvingPage() {
  //TODO: studyId 받아오기
  return (
    <div>
      <QuizNav mainTitle="똑스 풀기" studyId={1} />
      <Spacing size={25} />
      <Flex>
        <QuizQuestion />
        <QuizEditor />
      </Flex>
    </div>
  );
}
