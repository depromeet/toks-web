import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useQuery } from 'react-query';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QuizQuestion } from 'quiz/common/components/QuizQuestion';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { getUser } from 'quiz/common/remotes/user';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { AnswerCheckList } from './components/AnswerCheckList';

export default function QuizCheckingPage() {
  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID(quizIdParams), () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quiz || !user) {
    return null;
  }

  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));

  return (
    <>
      <QuizNav mainTitle="똑표 확인하기" studyId={quiz.studyId} />
      <Spacing size={25} />
      <Flex css={{ height: '100%' }}>
        <QuizQuestion quizAnswer={quiz.answer} />
        <Flex css={{ width: '50%' }}>
          <AnswerCheckList durationTime={durationTime} />
        </Flex>
      </Flex>
    </>
  );
}
