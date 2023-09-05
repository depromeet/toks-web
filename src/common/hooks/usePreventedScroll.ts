'use client';

import { useEffect } from 'react';

export const usePreventScroll = (condition = true) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (condition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [condition]);
};
