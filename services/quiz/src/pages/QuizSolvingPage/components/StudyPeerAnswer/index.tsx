import { theme } from '@depromeet/theme';
import { Accordion, Text, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { getQuizzesById } from 'common/remotes/quizzes';
import { QUERY_KEYS } from 'constants/queryKeys';

import { AccordionCotainer, StudyPeerAnswerWrapper, SubmitNotice, TextContainer } from './style';

export function StudyPeerAnswer() {
  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizzesById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  if (!quizzes) {
    return null;
  }

  return (
    <>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안</Text>
        <DoneNumberNotice done={quizzes.quizReplyHistories.length} />
      </Flex>
      <Spacing size={16} />
      <StudyPeerAnswerWrapper>
        {quizzes?.quizReplyHistories.map(({ creator }) => (
          <AccordionCotainer key={creator.userId}>
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
      </StudyPeerAnswerWrapper>
      {/* <Text variant="subhead">답변 제출 완료 후, 확인 해보세요!</Text> */}
    </>
  );
}
