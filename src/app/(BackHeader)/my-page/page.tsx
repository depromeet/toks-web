'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { GOOGLE_FORM_URL, ICON_URL } from '@/common';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';

import { LogoutBar } from './_components/LogoutBar';
import { UserInfo } from './_components/UserInfo';

const MyPage = () => {
  const router = useRouter();
  return (
    <div className="h-full">
      <div>
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
          onClick={() => {
            router.push(GOOGLE_FORM_URL);
          }}
        >
          이런 퀴즈가 있었으면 좋겠어요
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
