'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, bgColor } from '@/common';

export function ScrollToTopButton() {
  return (
    <button
      className={clsx(
        bgColor['gray20'],
        'fixed bottom-36px right-20px z-10 flex h-40px w-40px items-center justify-center rounded-40px'
      )}
    >
      <Image
        src={ICON_URL.CHEVRON_UP}
        width={16}
        height={9}
        alt="맨 위로가기 아이콘"
      />
    </button>
  );
}
