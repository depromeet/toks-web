'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { GOOGLE_FORM_URL, ICON_URL } from '@/common';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { Toast, ToastProps } from '@/common/components/Toast';
import { useToast } from '@/common/hooks/useToast';

import { LogoutBar } from './_components/LogoutBar';
import { UserInfo } from './_components/UserInfo';

const MyPage = () => {
  const [toastData, setToastData] = useState<ToastProps | null>(null);
  const router = useRouter();
  const { getSavedToastInfo, clearSavedToast } = useToast();
  useEffect(() => {
    setToastData(getSavedToastInfo());
    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full">
      <div>
        {toastData && (
          <Toast
            isShow={toastData.isShow}
            type={toastData.type}
            direction={toastData.direction}
            title={toastData.title}
          />
        )}
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
