'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, Toast, ToastProps } from '@/common';
import { useToast } from '@/common/hooks';

import { NicknameBox } from './components/NicknameBox';
import { useCreateNicknameForm } from './hooks/useCreateNicknameForm';

const Nickname = () => {
  const pathName = usePathname();
  const {
    register,
    errors,
    isDisabled,
    isMaxLength,
    isMinLength,
    isRequiredText,
    hasExclamationMark,
    nicknameMutation,
  } = useCreateNicknameForm(pathName);
  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  useEffect(() => {
    setToastData(getSavedToastInfo());
    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-main pt-86px">
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
          e.preventDefault(), nicknameMutation();
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
