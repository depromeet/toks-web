'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { PropsWithChildren, ReactNode } from 'react';

import { ICON_URL } from '@/common';
import { cn } from '@/common/utils';

import { GlobalPortal } from '../GlobalPortal';

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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
          onClick={() => onClose()}
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-120/80 p-20px"
        >
          <div className="flex flex-col">
            <button
              className="flex justify-end pb-16px"
              onClick={() => onClose()}
            >
              <Image src={ICON_URL.CLOSE} alt="close" width={24} height={24} />
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
