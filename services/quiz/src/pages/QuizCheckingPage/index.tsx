import { Flex } from '@toss/emotion-utils';
import { QuizQuestion } from 'common/components/QuizQuestion';
import { AnswerCheckList } from './components/AnserCheckList';

export default function QuizCheckingPage() {
  return (
    <Flex>
      <QuizQuestion />
      <Flex css={{ width: '50%' }}>
        <AnswerCheckList />
      </Flex>
    </Flex>
  );
}
