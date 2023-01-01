import { Icon, ImageViewer, Text, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';

import { DescriptionContainer, ImageContainer, Line, RoundInfo, Wrapper } from './style';
import { QuizTimer } from '../QuizTimer';

type ImageUrl = {
  src: string;
};
export function QuizQuestion() {
  const {
    query: { quizIdParams },
  } = useRouter();

  let urlArray: ImageUrl[] = [];

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  if (!quiz) {
    return null;
  }

  quiz.imageUrls.map(url => (url ? urlArray.push({ src: url }) : null));

  return (
    <Wrapper>
      <RoundInfo>
        <Text variant="body02" color="primary">
          {quiz.round}회차 진행 중
        </Text>
      </RoundInfo>
      <Spacing size={16} />
      <Flex css={{ alignItems: 'center' }}>
        <UserAvatar image={quiz?.creator.profileImageUrl} size="large" />
        <Text variant="subhead" color="gray040" css={{ marginLeft: '12px' }}>
          {quiz?.creator.nickname}
        </Text>
      </Flex>
      <Spacing size={24} />
      <Text variant="title04">Q. {quiz?.question}</Text>
      <Spacing size={24} />
      {urlArray.length !== 0 ? (
        <>
          <ImageContainer>
            <ImageViewer photos={urlArray} />
          </ImageContainer>
          <Spacing size={24} />
        </>
      ) : null}
      <DescriptionContainer>
        <Text variant="body02" color="gray040">
          {quiz?.description}
        </Text>
      </DescriptionContainer>
      <Line />
      <Spacing size={16} />
      <Flex css={{ textAlign: 'center' }}>
        <Icon iconName="ic-time" />
        <Text variant="title04" color="gray030" css={{ marginLeft: '10px' }}>
          <QuizTimer duration={quiz.durationOfSecond} />
        </Text>
      </Flex>
    </Wrapper>
  );
}
