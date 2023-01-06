import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { QuizNav } from 'common/components/QuizNav';
import { QuizQuestion } from 'common/components/QuizQuestion';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';
import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';
import { QUERY_KEYS } from 'constants/queryKeys';

import { AnswerCheckList } from './components/AnswerCheckList';

export default function QuizCheckingPage() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZREPLIES_BY_ID, () => getQuizReplyById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quiz || !quizzes || !user) {
    return null;
  }

  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));

  const myAnswer = quizzes.quizReplyHistories.find(element => element.creator.nickname === user.nickname)?.answer;
  return (
    <>
      <QuizNav mainTitle="똑표 확인하기" studyId={1} />
      <Spacing size={25} />
      <Flex css={{ height: '100%' }}>
        <QuizQuestion myAnswer={myAnswer} />
        <Flex css={{ width: '50%' }}>
          <AnswerCheckList durationTime={durationTime} />
        </Flex>
      </Flex>
    </>
  );
}
