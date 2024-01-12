'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ICON_URL, IMAGE_URL } from '@/common';
import { Text } from '@/common/components/Text';
import { useAuth } from '@/common/hooks';

export const UserInfo = () => {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState(ICON_URL.EMOJI_BASE_GRAY);
  const router = useRouter();

  useEffect(() => {
    if (user && user.profileImageUrl !== IMAGE_URL.BASE_KAKAO) {
      setProfileImage(user.profileImageUrl);
    }
  }, [user]);

  return (
    <div className="w-full flex-col items-center pt-20px text-center">
      <div className="mx-auto mb-24px h-96px w-96px overflow-hidden rounded-full">
        <Image src={profileImage} alt="프로필 이미지" width={96} height={96} />
      </div>
      <div className="mb-8px flex w-full justify-center">
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
      <Text typo="body" color="gray40">
        {user?.email}
      </Text>
    </div>
  );
};
