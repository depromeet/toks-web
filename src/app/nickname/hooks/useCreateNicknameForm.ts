import { useMutation } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { useToast } from '@/common/hooks/useToast';
import { isToksError } from '@/common/utils/http';

import { patchNickname } from '../remotes/nickname';

export interface CheckNicknameFormValues {
  nickname: string;
}

type NicknameFormType = {
  pathName: string;
  accessToken?: string;
  refreshToken?: string;
};

export const useCreateNicknameForm = ({
  pathName,
  accessToken,
  refreshToken,
}: NicknameFormType) => {
  const {
    register,
    getValues,
    setError,
    formState: { isDirty, isValid, errors },
  } = useForm<CheckNicknameFormValues>({
    mode: 'onChange',
  });

  const isDisabled = !isDirty || !isValid;
  const router = useRouter();
  const { saveToastInfo, clearSavedToast } = useToast();

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
    // 먼저 쿠키 세팅을 해줘야 nickname patch 가능
    if (accessToken && refreshToken) {
      setCookie('accessToken', accessToken);
      setCookie('refreshToken', refreshToken);
    }

    try {
      const res = await patchNickname(nickname);
      if (res !== null) {
        clearSavedToast();
        saveToastInfo({
          showOnNextPage: true,
          isShow: true,
          direction: 'bottom',
          type: 'success',
          title: '닉네임 설정을 완료하였어요.',
        });

        pathName === '/nickname/update'
          ? router.replace('/my-page')
          : router.replace('/toks-main');
      }
    } catch (err: unknown) {
      if (isToksError(err) && err.errorCode === 'DUPLICATED_NICKNAME') {
        setError('nickname', { message: '이미 존재하는 닉네임입니다.' });
      }
      // 에러 발생시 토큰 삭제
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
    }
  });

  const isRequiredText = useCallback(() => '닉네임은 2-6글자여야 합니다.', []);

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
