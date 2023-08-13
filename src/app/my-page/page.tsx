import Image from 'next/image';

import { Button, ICON_URL, Text } from '@/common';

import { BackHeader } from './components/BackHeader';
import { LogoutBar } from './components/LogoutBar';
import { UserInfo } from './components/UserInfo';

const MyPage = () => {
  return (
    <div>
      <BackHeader />
      <UserInfo />
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
      <Button
        className="w-full"
        size="L"
        typo="subheadingBold"
        backgroundColor="primaryDefault"
      >
        이런 퀴즈가 있었으면 좋겠어요
      </Button>
    </div>
  );
};

export default MyPage;
