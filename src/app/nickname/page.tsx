import clsx from 'clsx';
import Image from 'next/image';

import { Button, ICON_URL, Input, Text, bgColor } from '@/common';

const Nickname = () => {
  return (
    <>
      <div
        className={clsx(
          bgColor['gray110'],
          'w-full rounded-16px px-16px py-24px'
        )}
      >
        <Image
          src={ICON_URL.EMOJI_DROOLING}
          alt="똑스 아이콘"
          width={52.5}
          height={52.5}
        />
        <Text typo="headingM" color="white">
          내 이름은 똑스야 너의 이름은 뭐니?
        </Text>
        <Input autoFocus className="mt-40px" label="닉네임 입력" />
      </div>
      <Button size="L" typo="subheadingBold" backgroundColor="primaryDefault">
        완료
      </Button>
    </>
  );
};

export default Nickname;
