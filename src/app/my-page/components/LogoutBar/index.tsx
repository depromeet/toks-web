'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ICON_URL, Text } from '@/common';

import { LogoutBottomSheet } from '../LogoutBottonSheet';

export const LogoutBar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsShow(true);
        }}
        // onClick={() => onClick()}
        className="flex h-full w-full items-center justify-between rounded-12px bg-gray-100 px-20px py-16px"
      >
        <Text typo="subheadingBold" color="gray10">
          로그아웃
        </Text>
        <Image
          className="h-auto w-24px"
          src={ICON_URL.CHEVRON_RIGHT}
          alt="로그아웃 버튼"
          width="0"
          height="0"
        />
      </button>
      <LogoutBottomSheet onClose={() => setIsShow(false)} isShow={isShow} />
    </div>
  );
};
