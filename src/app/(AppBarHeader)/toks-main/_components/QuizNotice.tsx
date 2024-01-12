import Image from 'next/image';

import { ICON_URL } from '@/common';
import { Text } from '@/common/components/Text';

export const QuizNotice = () => {
  return (
    <div className="h-fit w-fit flex-col">
      <Image
        className="m-auto"
        src={ICON_URL.EMOJI_CODING}
        alt="none quiz emoji"
        width={53}
        height={53}
      />
      <div className="h-16px" />
      <Text typo="headingM" color="white">
        아직 퀴즈 준비 중이에요!
      </Text>
    </div>
  );
};
