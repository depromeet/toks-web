'use client';

import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';

import { getUserInfo } from '@/common';
import { Button } from '@/common/components/Button';
import { QUERY_KEYS } from '@/common/constants/queryKeys';
import { useWindowResize } from '@/common/hooks/useWindowResize';

import { NicknameBox } from '../_components/NicknameBox';
import { useCreateNicknameForm } from '../_lib/hooks/useCreateNicknameForm';

const UpdateNickname = () => {
  const pathName = usePathname();
  const accessToken = getCookie('accessToken') as string;

  const {
    data: user,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: QUERY_KEYS.GET_USER_INFO(accessToken),
    queryFn: async () => {
      return await getUserInfo();
    },
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
  } = useCreateNicknameForm({ pathName });
  const divRef = useWindowResize();

  return (
    <div ref={divRef} className="mobile-safe-h-screen relative pt-86px">
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
