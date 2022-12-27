import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizById } from 'pages/QuizSolvingPage/remotes/quiz';
import { Wrapper } from './style';
import { useQuery } from 'react-query';
import { useNextRouter } from '@toss/use-query-param';
import { useRouter } from 'next/router';
import { UserAvatar, Text, Timer } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { Divider } from 'common/components/Divider';

export function QuizQuestion() {
  //useNextRouter로 바꾸기.
  const router = useRouter();
  const quizId = router.query.quizId;

  console.log('hihi', quizId);
  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizId), {});

  console.log(quiz);

  return (
    <Wrapper>
      <Flex css={{ alignItems: 'center' }}>
        <UserAvatar image={`${quiz?.creator.profileImageUrl}`} size="large" />
        <Text variant="subhead" color="gray040" css={{ marginLeft: '12px' }}>
          {quiz?.creator.nickname}
        </Text>
      </Flex>
      <Spacing size={24} />
      <Text variant="title04">Q. {quiz?.quiz}</Text>
      <Spacing size={24} />
      <Text variant="body02" color="gray040">
        {quiz?.description}
      </Text>
      <Text variant="title04" color="gray030">
        {/* time = quiz.durationOfSecond 넘기기 */}
        <Timer />
      </Text>
    </Wrapper>
  );
}
