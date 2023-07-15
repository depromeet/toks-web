'use client';

import clsx from 'clsx';
import React from 'react';

import { useClickAway } from '@/common/hooks/useClickAway';

import { BottomSheetProps } from './types';
import { PureModal } from '../PurePortal';

export const BottomSheet = ({
  isShow,
  children,
  onClose,
  ...rest
}: BottomSheetProps) => {
  const bottomSheetContentRef = useClickAway({
    callback: () => {
      onClose();
    },
    enabled: true,
  });

  return (
    <PureModal isShow={isShow} {...rest}>
      <div
        ref={bottomSheetContentRef}
        className={clsx(
          'fixed bottom-0 left-0 right-0 z-50 h-486px w-full translate-y-full rounded-tl-16px rounded-tr-16px bg-gray-90 transition-transform duration-75',
          {
            'translate-y-0 animate-slide-up-bottom-sheet': isShow,
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </PureModal>
  );
};
