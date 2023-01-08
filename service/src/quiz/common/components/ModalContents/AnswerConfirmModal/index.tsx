import { PATHS } from '@depromeet/path';
import { Button, Image, Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

import { QuizTimer } from 'quiz/common/components/QuizTimer';

type VoteSubmitProps = {
  duration: number;
  quizId: string | number;
};

export function AnswerConfirmModal({ duration, quizId }: VoteSubmitProps) {
  return (
    <Flex.Center direction="column">
      <Text variant="title03">똑스 풀기가 끝나면</Text>
      <Text variant="title03">우수 답변을 확인해 보세요</Text>
      <Spacing size={40} />
      <Text variant="subhead" color="gray040">
        똑스 종료까지
      </Text>
      <Text variant="title03" color="gray040">
        {/* time = quiz.durationOfSecond 넘기기 */}
        <QuizTimer duration={duration} />
      </Text>
      <Image
        width={170}
        height={170}
        alt="expected-img"
        src="https://toks-web-assets.s3.amazonaws.com/toks-emoji/expected_emoji.svg"
      />
      <Spacing size={20} />
      <Link href={PATHS.quiz.check({ quizId })} prefetch passHref>
        <Button role="a">확인했어요</Button>
      </Link>
    </Flex.Center>
  );
}
