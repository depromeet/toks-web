import { Flex, Spacing } from '@toss/emotion-utils';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QuizQuestion } from 'quiz/common/components/QuizQuestion';

import { QuizEditor } from './components/QuizEditor';
import { StudyPeerAnswer } from './components/StudyPeerAnswer';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { useQueryParam } from '@depromeet/utils';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';

export default function QuizSolvingPage() {
  const quizIdParams = useQueryParam('quizIdParams', { suspense: true });

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  if (!quiz) {
    return null;
  }

  return (
    <>
      <QuizNav mainTitle="똑스 풀기" studyId={quiz?.studyId} />
      <Spacing size={25} />
      <Flex css={{ height: '100%' }}>
        <QuizQuestion />
        <Flex direction="column" css={{ width: '50%' }}>
          <QuizEditor />
          <StudyPeerAnswer />
        </Flex>
      </Flex>
    </>
  );
}
