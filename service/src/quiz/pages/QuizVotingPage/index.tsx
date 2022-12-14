import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useQuery } from 'react-query';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QuizQuestion } from 'quiz/common/components/QuizQuestion';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { MyAnswerViewer } from './components/MyAnswerViewer';
import { PeerAnswerList } from './components/PeerAnswerList';
import { VoteSubmitButton } from './components/VoteSubmitButton';

export default function QuizVotingPage() {
  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID(quizIdParams), () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  if (!quiz) {
    return null;
  }
  return (
    <>
      <QuizNav mainTitle="λν νκΈ°" studyId={quiz.studyId} />
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
