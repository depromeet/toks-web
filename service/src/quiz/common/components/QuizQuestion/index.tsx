import { Icon, ImageViewer, Text, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useQuery } from 'react-query';

import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { QuizTimer } from '../QuizTimer';
import { DescriptionContainer, ImageContainer, Line, RoundInfo, StudyQuestionWrapper, ViewerContainer } from './style';

type ImageUrl = {
  src: string;
};

type QuizQuestionProps = {
  quizAnswer?: string | undefined;
};
export function QuizQuestion({ quizAnswer }: QuizQuestionProps) {
  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const urlArray: ImageUrl[] = [];

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID(quizIdParams), () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  if (!quiz) {
    return null;
  }

  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));

  quiz.imageUrls.map(url => (url ? urlArray.push({ src: url }) : null));

  const showImages = () => {
    if (urlArray.length !== 0) {
      return (
        <>
          <ImageContainer>
            <ImageViewer photos={urlArray} />
          </ImageContainer>
          <Spacing size={24} />
        </>
      );
    } else {
      return null;
    }
  };

  const showMyAnswer = () => {
    if (quizAnswer != null) {
      return (
        <>
          <Spacing size={32} />
          <Text variant="headline" color="gray020">
            똑스 답안
          </Text>
          <Spacing size={12} />
          <ViewerContainer>
            <ToastViewer answer={quizAnswer} />
          </ViewerContainer>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <StudyQuestionWrapper>
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
      <DescriptionContainer>
        <Text variant="title04">Q. {quiz?.question}</Text>
        <Spacing size={24} />
        {showImages()}
        <Text variant="body02" color="gray040">
          {quiz?.description}
        </Text>
        {showMyAnswer()}
      </DescriptionContainer>
      <Line />
      <Spacing size={16} />
      <Flex css={{ textAlign: 'center' }}>
        <Icon iconName="ic-time" />
        <Text variant="title04" color="gray030" css={{ marginLeft: '10px' }}>
          <QuizTimer duration={durationTime} />
        </Text>
      </Flex>
    </StudyQuestionWrapper>
  );
}
