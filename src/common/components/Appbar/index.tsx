'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ICON_URL } from '@/common/constants';

import { Text } from '../Text';

export const Appbar = () => {
  const router = useRouter();

  // TODO: useAppbar hook 구현
  return (
    <header className="sticky left-0 right-0 top-0 z-50 h-54px bg-gray-120">
      <div className="flex h-full w-full items-center justify-between px-20px">
        <div className="flex items-center gap-4px">
          <Image
            layout="fixed"
            width={60}
            height={20}
            src={ICON_URL.TOKS_LOGO}
            alt="toks 로고"
          />
          {/* TODO: POPOVER 구현 */}
        </div>
        <button
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Login 페이지연결
            router.replace('/login');
          }}
        >
          {/* TODO: 로그인 여부 분기 */}
          <Text color="gray10" typo="body">
            로그인
          </Text>
        </button>
      </div>
    </header>
  );
};
