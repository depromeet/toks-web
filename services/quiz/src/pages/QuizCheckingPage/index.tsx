import { Flex } from '@toss/emotion-utils';
import { QuizQuestion } from 'common/components/QuizQuestion';
import { useRouter } from 'next/router';
import { AnswerCheckList } from './components/AnserCheckList';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';

export default function QuizCheckingPage() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizReplyById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const myAnswer = quizzes.quizReplyHistories.find(element => element.creator.nickname === user.nickname)?.answer;
  return (
    <Flex>
      <QuizQuestion myAnswer={myAnswer} />
      <Flex css={{ width: '50%' }}>
        <AnswerCheckList />
      </Flex>
    </Flex>
  );
}
