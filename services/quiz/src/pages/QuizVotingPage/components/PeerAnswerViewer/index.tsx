import { Accordion, ToastViewer, UserAvatar, Button } from '@depromeet/toks-components';
import { getQuizzesById } from 'common/remotes/quizzes';
import { getUser } from 'common/remotes/user';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { theme } from '@depromeet/theme';
import { PeerAnswerWrapper, Wrapper } from './style';

export function PeerAnswerViewer() {
  const {
    query: { quizIdParams },
  } = useRouter();
  // const [isFold, setIsFold] = useState(true);

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizzesById(quizIdParams), {
    enabled: !!quizIdParams,
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const peerAnswer = quizzes.quizReplyHistories.filter(element => element.creator.nickname !== user.nickname);
  console.log(peerAnswer);
  return (
    <>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안도 확인해볼까요? </Text>
        <DoneNumberNotice done={6} />
      </Flex>
      <Spacing size={16} />
      <Wrapper>
        {peerAnswer.map(({ answer, creator }) => (
          <PeerAnswerWrapper key={creator.userId}>
            <Accordion
              isFold={false}
              // onFold={() => setIsFold(!isFold)}
              backgroundColor={theme.colors.gray110}
              headerNodes={
                <Flex css={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                  <Flex css={{ alignItems: 'center' }}>
                    <UserAvatar image={creator.profileImageUrl} size="large" />
                    <Text css={{ marginLeft: '12px' }} variant="subhead" color="gray020">
                      {creator.nickname}
                    </Text>
                  </Flex>
                  <Button css={{ float: 'right' }} width={110} size="medium" type="general">
                    똑표하기
                  </Button>
                </Flex>
              }
              bodyNodes={
                <>
                  <Spacing size={22} />
                  <ToastViewer answer={answer} />
                </>
              }
            />
          </PeerAnswerWrapper>
        ))}
      </Wrapper>
    </>
  );
}
