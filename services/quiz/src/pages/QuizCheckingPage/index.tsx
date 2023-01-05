import { Flex, Spacing } from '@toss/emotion-utils';
import { QuizQuestion } from 'common/components/QuizQuestion';
import { useRouter } from 'next/router';
import { AnswerCheckList } from './components/AnserCheckList';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';
import { QuizNav } from 'common/components/QuizNav';

export default function QuizCheckingPage() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZREPLIES_BY_ID, () => getQuizReplyById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const myAnswer = quizzes.quizReplyHistories.find(element => element.creator.nickname === user.nickname)?.answer;
  return (
    <>
      <QuizNav mainTitle="똑표 확인하기" studyId={1} />
      <Spacing size={25} />
      <Flex css={{ height: '100%' }}>
        <QuizQuestion myAnswer={myAnswer} />
        <Flex css={{ width: '50%' }}>
          <AnswerCheckList />
        </Flex>
      </Flex>
    </>
  );
}
