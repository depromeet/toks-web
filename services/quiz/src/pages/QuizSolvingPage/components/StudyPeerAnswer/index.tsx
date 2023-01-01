import { Flex, Spacing } from '@toss/emotion-utils';
import { Accordion, Text, Image, UserAvatar } from '@depromeet/toks-components';
import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { AccordionCotainer, StudyPeerAnswerWrapper, SubmitNotice, TextContainer } from './style';
import { theme } from '@depromeet/theme';
import { useRouter } from 'next/router';
import { getQuizzesById } from './remotes/quizzes';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useQuery } from 'react-query';

export function StudyPeerAnswer() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizzesById(quizIdParams), {
    enabled: !!quizIdParams,
  });

  if (!quizzes) {
    return null;
  }

  quizzes?.quizReplyHistories.map(({ creator }) => {
    console.log(creator);
  });

  return (
    <StudyPeerAnswerWrapper>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안</Text>
        <DoneNumberNotice done={6} />
      </Flex>
      <Spacing size={16} />
      {quizzes?.quizReplyHistories.map(({ creator }) => (
        <AccordionCotainer>
          <SubmitNotice>
            <TextContainer>
              <Text color="gray020" variant="subhead">
                답변 제출 완료 후, 확인 해보세요!
              </Text>
            </TextContainer>
          </SubmitNotice>
          <Accordion
            isFold={false}
            backgroundColor={theme.colors.gray120}
            headerNodes={
              <Flex css={{ alignItems: 'center' }}>
                <UserAvatar image={creator.profileImageUrl} size="large" />
                <Text css={{ marginLeft: '12px' }} variant="subhead" color="gray020">
                  {creator.nickname}
                </Text>
              </Flex>
            }
            bodyNodes={<></>}
          />
        </AccordionCotainer>
      ))}
      {/* <Text variant="subhead">답변 제출 완료 후, 확인 해보세요!</Text> */}
    </StudyPeerAnswerWrapper>
  );
}
