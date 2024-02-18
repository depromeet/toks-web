'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useCommentListRef } from '@/app/quiz/hooks/useCommentListRef';
import { ICON_URL, bgColor } from '@/common';
import { useThrottle } from '@/common/hooks';

export function ScrollToTopButton() {
  const commentListRef = useCommentListRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useThrottle(() => {
    if (window.scrollY > 1000 && !isVisible) {
      setIsVisible(true);
    }
    if (window.scrollY < 1000 && isVisible) {
      setIsVisible(false);
    }
  }, 300);

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
        if (commentListRef.current) {
          (commentListRef.current as HTMLElement).scrollIntoView();
          window.scrollBy(0, -54);
        }
      }}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      <Image
        className="h-auto w-16px"
        src={ICON_URL.CHEVRON_UP}
        width="0"
        height="0"
        alt="맨 위로가기 아이콘"
      />
    </button>
  );
}
