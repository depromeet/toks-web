'use client';

import { deleteCookie, getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/common/components/Button';
import { Toast, ToastProps } from '@/common/components/Toast';
import { useToast } from '@/common/hooks';
import { useWindowResize } from '@/common/hooks/useWindowResize';

import { NicknameBox } from './components/NicknameBox';
import { useCreateNicknameForm } from './hooks/useCreateNicknameForm';

const Nickname = () => {
  const pathName = usePathname();

  const [accessToken] = useState<string>(getCookie('accessToken') as string);
  const [refreshToken] = useState<string>(getCookie('refreshToken') as string);

  const {
    register,
    errors,
    isDisabled,
    isMaxLength,
    isMinLength,
    isRequiredText,
    hasExclamationMark,
    nicknameMutation,
  } = useCreateNicknameForm({ pathName, accessToken, refreshToken });
  const divRef = useWindowResize();

  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  useEffect(() => {
    // 닉네임 설정을 마치지 않고 이탈한 경우 대비해 토큰 삭제
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    setToastData(getSavedToastInfo());
    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={divRef} className="mobile-safe-h-screen relative pt-86px">
      {toastData && (
        <Toast
          isShow={toastData.isShow}
          type={toastData.type}
          direction={toastData.direction}
          title={toastData.title}
        />
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nicknameMutation();
        }}
      >
        <NicknameBox
          register={register}
          isMaxLength={isMaxLength}
          isMinLength={isMinLength}
          isRequiredText={isRequiredText}
          hasExclamationMark={hasExclamationMark}
          errors={errors}
          boxDescription="내 이름은 똑스야! 너의 이름은 뭐니?"
          defaultValue=""
        />
        <Button
          className="absolute bottom-20px w-full"
          size="L"
          typo="subheadingBold"
          backgroundColor="primaryDefault"
          disabled={isDisabled}
        >
          완료
        </Button>
      </form>
    </div>
  );
};

export default Nickname;
