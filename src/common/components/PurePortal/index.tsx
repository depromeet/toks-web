'use client';

import clsx from 'clsx';
import { createPortal } from 'react-dom';

import { PureModalProps } from './types';

export const PureModal = ({ isShow, children }: PureModalProps) => {
  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 z-30  items-center justify-center bg-gray-120/80',
        {
          hidden: !isShow,
          'flex animate-fade-in-back-drop': isShow,
        }
      )}
    >
      {children}
    </div>,
    portalElement
  );
};
