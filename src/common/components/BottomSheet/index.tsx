'use client';

import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import { useClickAway } from '@/common/hooks/useClickAway';

import { BottomSheetProps } from './types';
import { GlobalPortal } from '../GlobalPortal';

export const BottomSheet = ({
  isShow,
  children,
  onClose,
}: PropsWithChildren<BottomSheetProps>) => {
  const bottomSheetContentRef = useClickAway({
    callback: () => {
      onClose();
    },
  });
  return (
    <GlobalPortal.Consumer>
      <div
        ref={bottomSheetContentRef}
        className={clsx(
          'fixed bottom-0 left-0 right-0 z-50 h-486px w-full translate-y-full rounded-tl-16px rounded-tr-16px bg-gray-90 transition-transform duration-75',
          {
            'translate-y-0 animate-slide-up-bottom-sheet': isShow,
          }
        )}
      >
        {children}
      </div>
    </GlobalPortal.Consumer>
  );
};
