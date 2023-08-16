'use client';

import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

import { Button } from '@/common';
import { QUERY_KEYS } from '@/common/constants/queryKeys';
import { getUserInfo } from '@/queries';

import { NicknameBox } from '../components/NicknameBox';
import { useCreateNicknameForm } from '../hooks/useCreateNicknameForm';

const UpdateNickname = () => {
  const accessToken = getCookie('accessToken') as string;

  const {
    data: user,
    isSuccess,
    isLoading,
  } = useQuery(QUERY_KEYS.GET_USER_INFO(accessToken), async () => {
    return await getUserInfo();
  });

  const {
    register,
    errors,
    isDisabled,
    isMaxLength,
    isMinLength,
    isRequiredText,
    hasExclamationMark,
    nicknameMutation,
  } = useCreateNicknameForm();

  return (
    <div className="relative h-main pt-86px">
      <form
        onSubmit={(e) => {
          e.preventDefault(), nicknameMutation();
        }}
      >
        {user && isSuccess && !isLoading && (
          <NicknameBox
            register={register}
            isMaxLength={isMaxLength}
            isMinLength={isMinLength}
            isRequiredText={isRequiredText}
            hasExclamationMark={hasExclamationMark}
            errors={errors}
            boxDescription="어떤 이름으로 바꿔볼까요?"
            defaultValue={user.nickname}
          />
        )}
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

export default UpdateNickname;
