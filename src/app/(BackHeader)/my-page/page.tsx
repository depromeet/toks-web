import Image from 'next/image';

import { ICON_URL } from '@/common';
import { Text } from '@/common/components/Text';

import { GoogleFormButton } from './_components/GoogleFormButton';
import { LogoutBar } from './_components/LogoutBar';

const MyPage = () => {
  return (
    <div className="h-full">
      <div>
        <div className="h-40px" />
        <LogoutBar />
        <div className="h-56px" />
        <Text typo="headingM" color="gray40">
          똑스에서 풀고 싶은 퀴즈가 있다면?
        </Text>
        <Image
          className="mx-auto my-20px"
          src={ICON_URL.EMOJI_ROCKET}
          width={160}
          height={160}
          alt="로켓 이미지"
        />
        <GoogleFormButton />
      </div>
    </div>
  );
};

export default MyPage;
