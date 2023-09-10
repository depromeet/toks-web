'use client';

import React, { PropsWithChildren } from 'react';

// import { useClickAway } from '@/common/hooks/useClickAway';
import { cn } from '@/common/utils';

import { BottomSheetProps } from './types';
import { GlobalPortal } from '../GlobalPortal';

export const BottomSheet = ({
  isShow,
  children,
  onClose,
  className,
}: PropsWithChildren<BottomSheetProps>) => {
  // const bottomSheetContentRef = useClickAway({
  //   callback: () => {
  //     onClose();
  //   },
  // });
  return (
    <GlobalPortal.Consumer>
      <Dimmer isShow={isShow} onClose={() => onClose()} />
      <div
        // ref={bottomSheetContentRef}
        style={{
          transition: 'transform 0.3s ease-out',
        }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 h-auto w-full translate-y-full rounded-tl-16px rounded-tr-16px bg-gray-90',
          {
            'translate-y-0': isShow, //animate-slide-up-bottom-sheet
          },
          className
        )}
      >
        {children}
      </div>
    </GlobalPortal.Consumer>
  );
};

const Dimmer = ({
  isShow,
  onClose,
}: {
  isShow: boolean;
  onClose: VoidFunction;
}) => {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={cn(
        'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-120/80',
        {
          hidden: !isShow,
          'animate-fade-in-back-drop': isShow,
        }
      )}
    />
  );
};
