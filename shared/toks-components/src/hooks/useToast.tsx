import { useOverlay } from '@toss/use-overlay';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, useCallback } from 'react';

import { Toast } from '../components/Toast';

const TOAST_OPENED_TIME = 3_000;

interface Props extends ComponentProps<typeof Toast> {
  time?: number;
  showOnNextPage?: boolean;
}

const LOCAL_STORAGE_KEY = '@depromeet/toast-key';

const saveToastInfo = (info: Props) => {
  const prevData = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (prevData != null) {
    /**
     * @Note 실제 런타임에서 동작을 방해할 수 있으므로, 에러를 throw 하지는 않습니다.
     */
    console.error(
      '이전에 이미 저장된 토스트 정보가 있습니다. 의도된 동작이라면, 저장된 토스트 정보를 지우고 새로운 정보를 저장하세요.'
    );
  }

  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(info));
};

const getSavedToastInfo = (): Props | null => {
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return data != null ? JSON.parse(data) : null;
};

const clearSavedToast = () => {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export function useToast() {
  const overlay = useOverlay();

  const openToast = useCallback(
    ({ time = TOAST_OPENED_TIME, showOnNextPage = false, ...rest }: Props) =>
      new Promise(resolve => {
        if (showOnNextPage) {
          saveToastInfo({ time, showOnNextPage: false, ...rest });
          resolve(true);
          return;
        }

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
      }),
    [overlay]
  );

  return { open: openToast, close: overlay.close };
}

export function useBeginningToast() {
  const { open } = useToast();

  const openBegginingToast = useCallback(async () => {
    const savedToastData = getSavedToastInfo();

    if (savedToastData != null) {
      await open(savedToastData);
      clearSavedToast();
    }
  }, [open]);

  return {
    open: openBegginingToast,
  };
}
