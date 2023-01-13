import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useQuery } from 'react-query';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QuizQuestion } from 'quiz/common/components/QuizQuestion';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { getQuizReplyById } from 'quiz/common/remotes/quizReply';
import { getUser } from 'quiz/common/remotes/user';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { EmptyAnswer } from '../QuizCheckingPage/components/EmptyAnswer';
import { MyAnswerViewer } from './components/MyAnswerViewer';
import { PeerAnswerList } from './components/PeerAnswerList';
import { VoteSubmitButton } from './components/VoteSubmitButton';

export default function QuizVotingPage() {
  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID(quizIdParams), () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });
  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  const { data: quizzes } = useQuery(
    QUERY_KEYS.GET_QUIZREPLIES_BY_ID(quizIdParams),
    () => getQuizReplyById(quizIdParams),
    {
      enabled: Boolean(quizIdParams),
    }
  );

  if (!quiz || !user) {
    return null;
  }
  if (quiz.creator.nickname === user.nickname) {
    return (
      <>
        <QuizNav mainTitle="똑표 하기" studyId={quiz.studyId} />
        <Spacing size={25} />
        <Flex css={{ height: '100%' }}>
          <QuizQuestion quizAnswer={quiz.answer} />
          <Flex direction="column" css={{ width: '50%', height: '80vh', position: 'relative' }}>
            {quizzes?.quizReplyHistories.length !== 0 ? (
              <>
                <PeerAnswerList isQuizCreator={true} />
                <VoteSubmitButton />
              </>
            ) : (
              <EmptyAnswer />
            )}
          </Flex>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <QuizNav mainTitle="똑표 하기" studyId={quiz.studyId} />
        <Spacing size={25} />
        <Flex css={{ height: '100%' }}>
          <QuizQuestion />
          <Flex direction="column" css={{ width: '50%', height: '80vh', position: 'relative' }}>
            <MyAnswerViewer />
            <PeerAnswerList isQuizCreator={false} />
            <VoteSubmitButton />
          </Flex>
        </Flex>
      </>
    );
  }
}
