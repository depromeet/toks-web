import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface CheckNicknameFormValues {
  nickname: string;
}

export const DEFAULT_NICKNAME_VALUE: CheckNicknameFormValues = {
  nickname: '',
};

export const useCreateNicknameForm = () => {
  const {
    register,
    formState: { isDirty, isValid, errors },
  } = useForm<CheckNicknameFormValues>({
    mode: 'onChange',
    defaultValues: DEFAULT_NICKNAME_VALUE,
  });

  const isDisabled = !isDirty || !isValid;

  const isMaxLength = useCallback((maxLength: number) => {
    return {
      value: maxLength,
      message: `닉네임은 2-${maxLength}글자여야 합니다.`,
    };
  }, []);

  const isMinLength = useCallback((minLength: number) => {
    return {
      value: minLength,
      message: `닉네임은 ${minLength}-6글자여야 합니다.`,
    };
  }, []);

  const hasExclamationMark = useCallback((pattern: RegExp) => {
    return {
      value: pattern,
      message: '특수문자는 사용 불가능합니다.',
    };
  }, []);

  const isRequiredText = useCallback(() => '닉네임은 2-10글자여야 합니다.', []);

  return {
    register,
    isMaxLength,
    isMinLength,
    isRequiredText,
    hasExclamationMark,
    isDisabled,
    errors,
  };
};
