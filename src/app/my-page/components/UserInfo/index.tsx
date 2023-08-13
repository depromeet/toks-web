'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ICON_URL, IMAGE_URL } from '@/common';
import { useAuth } from '@/common/hooks';

export const UserInfo = () => {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState(ICON_URL.EMOJI_BASE_GRAY);

  useEffect(() => {
    if (user && user.profileImageUrl !== IMAGE_URL.BASE_KAKAO) {
      setProfileImage(user.profileImageUrl);
    }
  }, [user]);

  console.log(user);
  return (
    <div>
      <Image src={profileImage} alt="프로필 이미지" width={96} height={96} />
    </div>
  );
};
