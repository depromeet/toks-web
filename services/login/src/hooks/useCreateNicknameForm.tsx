import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

interface CreateNicknameForm {
  nickName: string;
}

export const useCreateNicknameForm = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { isDirty, isValid, errors },
  } = useForm<CreateNicknameForm>({ mode: 'onChange' });

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
      message: `닉네임은 ${minLength}-10글자여야 합니다.`,
    };
  }, []);

  const isRequiredText = useCallback(() => '닉네임은 2-10글자여야 합니다.', []);

  return {
    register,
    handleSubmit,
    setValue,
    setError,
    errors,
    control,
    isDisabled,
    isMaxLength,
    isMinLength,
    isRequiredText,
  };
};
