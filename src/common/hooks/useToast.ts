// import { ComponentProps } from 'react';

import { ToastProps } from '../components/Toast';

const LOCAL_STORAGE_KEY = '@depromeet/toast-key';

// interface Props extends ComponentProps<typeof Toast> {
//   type: ToastType;
//   time?: number;
//   showOnNextPage?: boolean;
// }

export const useToast = () => {
  const saveToastInfo = (info: ToastProps) => {
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

  const getSavedToastInfo = (): ToastProps | null => {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return data != null ? JSON.parse(data) : null;
  };

  const clearSavedToast = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return { saveToastInfo, getSavedToastInfo, clearSavedToast };
};
