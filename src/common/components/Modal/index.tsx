'use client';

import Image from 'next/image';

import { cn } from '@/common/utils';
import { GlobalPortal } from '../GlobalPortal';
import { PropsWithChildren, ReactNode } from 'react';
import { ICON_URL } from '@/common';

type ModalProp = {
  isShow: boolean;
  onClose: VoidFunction;
};

export const Modal = ({
  isShow,
  onClose,
  children,
}: PropsWithChildren<ModalProp>) => {
  return (
    <GlobalPortal.Consumer>
      <Dimmer isShow={isShow} onClose={onClose} children={children} />
    </GlobalPortal.Consumer>
  );
};

const Dimmer = ({
  isShow,
  onClose,
  children,
}: {
  isShow: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}) => {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={cn(
        'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-120/80 p-20px',
        {
          hidden: !isShow,
          'animate-fade-in-back-drop': isShow,
        }
      )}
    >
      <div className="flex flex-col">
        <button className="flex justify-end pb-16px" onClick={() => onClose()}>
          <Image src={ICON_URL.CLOSE} alt="close" width={24} height={24} />
        </button>
        {children}
      </div>
    </div>
  );
};
