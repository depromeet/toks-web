import { Text } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getQuizReplyById } from 'common/remotes/quizReply';
import { getUser } from 'common/remotes/user';
import { QUERY_KEYS } from 'constants/queryKeys';

import { MyAnswerWrapper } from './style';

const ToastViewer = dynamic(() => import('@depromeet/toks-components/src/components/ToastViewer/ToastViewer'), {
  ssr: false,
});

export function MyAnswerViewer() {
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
    <MyAnswerWrapper>
      <Text variant="subhead">나의 답안</Text>
      <Spacing size={16} />
      <ToastViewer height={'18vh'} answer={myAnswer} />
    </MyAnswerWrapper>
  );
}
