import dynamic from 'next/dynamic';
import { MyAnswerContainer, MyAnswerWrapper } from './style';
import { Text } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useQuery } from 'react-query';
import { getQuizzesById } from 'common/remotes/quizzes';
import { getUser } from 'common/remotes/user';

const ToastViewer = dynamic(() => import('@depromeet/toks-components/src/components/ToastViewer/ToastViewer'), {
  ssr: false,
});

export function MyAnswerViewer() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizzesById(quizIdParams), {
    enabled: !!quizIdParams,
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const myAnswer = quizzes.quizReplyHistories.find(element => element.creator.nickname === user.nickname)?.answer;

  return (
    <MyAnswerWrapper>
      <Text variant="subhead">나의 답안</Text>
      <Spacing size={16} />
      <MyAnswerContainer>
        <ToastViewer answer={myAnswer} />
      </MyAnswerContainer>
    </MyAnswerWrapper>
  );
}
