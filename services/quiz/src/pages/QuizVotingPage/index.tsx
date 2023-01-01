import { Flex, Spacing } from '@toss/emotion-utils';
import { QuizNav } from 'common/components/QuizNav';
import { QuizQuestion } from 'common/components/QuizQuestion';
import { MyAnswerViewer } from './components/MyAnswerViewer';
import { PeerAnswerViewer } from './components/PeerAnswerViewer';

export default function QuizVotingPage() {
  return (
    <>
      <QuizNav mainTitle="똑표 하기" studyId={1} />
      <Spacing size={25} />
      <Flex>
        <QuizQuestion />
        <Flex direction="column" css={{ width: '50%' }}>
          <MyAnswerViewer />
          <Spacing size={50} />
          <PeerAnswerViewer />
        </Flex>
      </Flex>
    </>
  );
}
