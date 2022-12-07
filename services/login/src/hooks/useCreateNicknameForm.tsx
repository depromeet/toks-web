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
    formState: { isDirty, isValid, errors },
  } = useForm<CreateNicknameForm>({ mode: 'onChange' });

  const isDisabled = !isDirty || !isValid;

  const isMaxLength = useCallback((maxLength: number) => {
    return {
      value: maxLength,
      message: `${maxLength}자 이내로 입력해주세요.`,
    };
  }, []);

  const isRequiredText = useCallback((text: string) => `${text}을 입력해주세요.`, []);

  return {
    register,
    handleSubmit,
    setValue,
    errors,
    control,
    isDisabled,
    isMaxLength,
    isRequiredText,
  };
};
