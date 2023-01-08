import { PATHS } from '@depromeet/path';
import { Button, Image, Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import Link from 'next/link';

type SubmitModalProps = {
  quizId: number | string;
};
export function SubmitModal({ quizId }: SubmitModalProps) {
  return (
    <Flex.Center direction="column">
      <Text variant="title03">제출 완료!</Text>
      <Text variant="title03">팀원 중 최고의 답변에 투표해주세요!</Text>
      <Spacing size={30} />
      <Image
        width={150}
        height={150}
        alt="expected-img"
        src="https://toks-web-assets.s3.amazonaws.com/toks-emoji/expected_emoji.svg"
      />
      <Spacing size={30} />
      <Link href={PATHS.quiz.vote({ quizId })} passHref prefetch>
        <Button role="a">당신의 팀원에게 똑표하세요</Button>
      </Link>
    </Flex.Center>
  );
}
