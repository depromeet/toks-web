'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

import { ICON_URL } from '@/common/constants';
import { useToast } from '@/common/hooks/useToast';
import { cn } from '@/common/utils';

import { GlobalPortal } from '../GlobalPortal';
import { Text } from '../Text';

const VERTICAL = ['top', 'bottom'] as const;

type VerticalDirection = (typeof VERTICAL)[number];
export type ToastType = 'success' | 'failed';

export interface ToastProps {
  type: ToastType;
  title?: string;
  direction?: VerticalDirection;
  icon?: ReactNode;
  time?: number;
  isShow?: boolean;
  showOnNextPage?: boolean;
}
const TOAST_OPENED_TIME = 3_000;

const TOAST_ICON: { [key in ToastType]: string } = {
  failed: ICON_URL['FAILED'],
  success: ICON_URL['SUCCESS'],
};

const TOAST_DIRECTION: { [key in VerticalDirection]: string } = {
  top: 'top-24px',
  bottom: 'bottom-24px',
};

export const Toast = ({
  isShow,
  type,
  title,
  //   TODO: 추후 변경될 가능성 생각하여 반영
  direction = 'bottom',
  time = TOAST_OPENED_TIME,
  showOnNextPage,
}: ToastProps) => {
  const { saveToastInfo } = useToast();
  const [isOpen, setIsOpen] = useState(isShow);
  if (showOnNextPage) {
    saveToastInfo({
      type,
      isShow,
      title,
      direction,
      time: TOAST_OPENED_TIME,
      showOnNextPage: false,
    });
    return null;
  }
  return (
    <GlobalPortal.Consumer>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onAnimationStart={() => {
              window.setTimeout(() => setIsOpen(false), time);
            }}
          >
            <div
              className={cn(
                TOAST_DIRECTION[direction],
                'fixed right-2/4 z-50 flex w-fit translate-x-2/4 gap-6px rounded-8px bg-gray-90 px-24px py-12px'
              )}
            >
              <Image
                width={20}
                height={20}
                src={TOAST_ICON[type]}
                alt="버튼 아이콘 입니다."
              />
              <Text typo="subheading" color="white">
                {title}
              </Text>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </GlobalPortal.Consumer>
  );
};
