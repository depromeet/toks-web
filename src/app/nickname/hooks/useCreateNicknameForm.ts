import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { isToksError } from '@/common/utils/http';

import { postNickname } from '../remotes/nickname';

interface CheckNicknameFormValues {
  nickname: string;
}

const DEFAULT_NICKNAME_VALUE: CheckNicknameFormValues = {
  nickname: '',
};

export const useCreateNicknameForm = () => {
  const {
    register,
    getValues,
    setError,
    formState: { isDirty, isValid, errors },
  } = useForm<CheckNicknameFormValues>({
    mode: 'onChange',
    defaultValues: DEFAULT_NICKNAME_VALUE,
  });

  const isDisabled = !isDirty || !isValid;
  const router = useRouter();

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

  const { mutate: nicknameMutation } = useMutation(async () => {
    const nickname = getValues('nickname');
    try {
      const res = await postNickname(nickname);
      if (res !== null) {
        router.replace('/toks-main');
      }
    } catch (err: unknown) {
      if (isToksError(err) && err.errorCode === 'DUPLICATED_NICKNAME') {
        setError('nickname', { message: '이미 존재하는 닉네임입니다.' });
      }
    }
  });

  const isRequiredText = useCallback(() => '닉네임은 2-10글자여야 합니다.', []);

  return {
    register,
    isMaxLength,
    isMinLength,
    isRequiredText,
    hasExclamationMark,
    nicknameMutation,
    isDisabled,
    errors,
  };
};
