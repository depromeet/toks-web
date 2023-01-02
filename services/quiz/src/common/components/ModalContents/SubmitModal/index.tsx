import { PATHS, pushTo } from '@depromeet/path';
import { Button, Image, Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';

type SubmitModalProps = {
  quizId: number | string;
};
export function SubmitModal({ quizId }: SubmitModalProps) {
  const onClick = () => {
    pushTo(PATHS.quiz.vote({ quizId }));
  };

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
      <Button onClick={onClick}>당신의 팀원에게 똑표하세요</Button>
    </Flex.Center>
  );
}
