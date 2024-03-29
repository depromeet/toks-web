import clsx from 'clsx';
import Image from 'next/image';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { ICON_URL, Input, Text, bgColor } from '@/common';

import { CheckNicknameFormValues } from '../hooks/useCreateNicknameForm';

interface HookFormValidateProps {
  value: number;
  message: string;
}

type NicknameBoxProps = {
  register: UseFormRegister<CheckNicknameFormValues>;
  isRequiredText: () => string;
  hasExclamationMark: (pattern: RegExp) => {
    value: RegExp;
    message: string;
  };
  isMaxLength: (maxLength: number) => HookFormValidateProps;
  isMinLength: (minLength: number) => HookFormValidateProps;
  errors: FieldErrors<CheckNicknameFormValues>;
  boxDescription: string;
  defaultValue: string;
};

export const NicknameBox = ({
  register,
  isRequiredText,
  isMaxLength,
  isMinLength,
  hasExclamationMark,
  errors,
  boxDescription,
  defaultValue,
}: NicknameBoxProps) => {
  return (
    <div
      className={clsx(
        bgColor['gray110'],
        'flex w-full flex-col items-center rounded-16px px-16px py-24px'
      )}
    >
      <Image
        className="h-auto w-52px"
        src={ICON_URL.EMOJI_DROOLING}
        alt="똑스 아이콘"
        width="0"
        height="0"
      />
      <div className="mt-16px flex w-full flex-col items-center">
        <Text typo="headingM" color="white">
          {boxDescription}
        </Text>
        <Input
          {...register('nickname', {
            required: isRequiredText(),
            minLength: isMinLength(2),
            maxLength: isMaxLength(6),
            pattern: hasExclamationMark(/^[a-zA-Z0-9가-힣]+$/i),
          })}
          className="mt-40px"
          label="닉네임 입력"
          defaultValue={defaultValue}
          errorMessage={errors.nickname?.message}
        />
      </div>
    </div>
  );
};
