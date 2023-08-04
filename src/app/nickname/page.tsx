import clsx from 'clsx';
import Image from 'next/image';

import { Button, ICON_URL, Input, Text, bgColor } from '@/common';

const Nickname = () => {
  return (
    <div className="relative h-main pt-86px">
      <div
        className={clsx(
          bgColor['gray110'],
          'flex w-full flex-col items-center rounded-16px px-16px py-24px'
        )}
      >
        <Image
          src={ICON_URL.EMOJI_DROOLING}
          alt="똑스 아이콘"
          width={52.5}
          height={52.5}
        />
        <div className="mt-16px flex w-full flex-col items-center">
          <Text typo="headingM" color="white">
            내 이름은 똑스야 너의 이름은 뭐니?
          </Text>
          <Input autoFocus className="mt-40px" label="닉네임 입력" />
        </div>
      </div>
      <Button
        className="absolute bottom-20px w-full"
        size="L"
        typo="subheadingBold"
        backgroundColor="primaryDefault"
      >
        완료
      </Button>
    </div>
  );
};

export default Nickname;
