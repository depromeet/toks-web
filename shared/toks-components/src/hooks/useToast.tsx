import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { Toast } from '../components/Toast';

const TOAST_OPENED_TIME = 3_000;

interface Props extends ComponentProps<typeof Toast> {
  time?: number;
}

export function useToast() {
  const overlay = useOverlay();

  const openToast = ({ time = TOAST_OPENED_TIME, ...rest }: Props) =>
    new Promise(resolve => {
      overlay.open(({ isOpen, close }) => {
        return (
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onAnimationStart={() => {
                  window.setTimeout(close, time);
                  resolve(true);
                }}
              >
                <Toast {...rest} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        );
      });
    });

  return { open: openToast, close: overlay.close };
}

export default useToast;
