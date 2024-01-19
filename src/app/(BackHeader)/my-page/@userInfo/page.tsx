'use client';

import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ICON_URL } from '@/common';
import { Text } from '@/common/components/Text';

import { useSuspenseUserInfoQuery } from '../_lib/hooks/useSuspenseUserInfoQuery';

const UserInfo = () => {
  const router = useRouter();
  const accessToken = getCookie('accessToken');
  const { data: user } = useSuspenseUserInfoQuery(accessToken as string);

  return (
    <div className="w-full flex-col items-center pt-20px text-center">
      <div className="mx-auto mb-24px h-96px w-96px overflow-hidden rounded-full">
        <Image
          src={
            user.profileImageUrl
              ? user.profileImageUrl
              : ICON_URL.EMOJI_BASE_GRAY
          }
          alt="프로필 이미지"
          width={96}
          height={96}
        />
      </div>
      <div className="mb-8px flex h-24px w-full justify-center">
        <Text typo="headingL" color="gray10">
          {user?.nickname}
        </Text>
        <Image
          className="ml-4px"
          src={ICON_URL.CHEVRON_RIGHT}
          alt="닉네임 수정 버튼"
          width={24}
          height={24}
          onClick={() => router.push('/nickname/update')}
        />
      </div>
      <div className="h-24px">
        <Text typo="body" color="gray40">
          {user?.email}
        </Text>
      </div>
    </div>
  );
};

export default UserInfo;
