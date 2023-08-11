'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { ICON_URL, bgColor } from '@/common';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 1000 && !isVisible) {
      setIsVisible(true);
    }
    if (window.scrollY < 1000 && isVisible) {
      setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <button
      className={clsx(
        bgColor['gray20'],
        'fixed bottom-36px right-20px z-10 flex h-40px w-40px items-center justify-center rounded-40px'
      )}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
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
