import { Flex, Spacing } from '@toss/emotion-utils';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QuizQuestion } from 'quiz/common/components/QuizQuestion';

import { MyAnswerViewer } from './components/MyAnswerViewer';
import { PeerAnswerList } from './components/PeerAnswerList';
import { VoteSubmitButton } from './components/VoteSubmitButton';

export default function QuizVotingPage() {
  return (
    <>
      <QuizNav mainTitle="똑표 하기" studyId={1} />
      <Spacing size={25} />
      <Flex css={{ height: '100%' }}>
        <QuizQuestion />
        <Flex direction="column" css={{ width: '50%', height: '100%', position: 'relative' }}>
          <MyAnswerViewer />
          <PeerAnswerList />
          <VoteSubmitButton />
        </Flex>
      </Flex>
    </>
  );
}
