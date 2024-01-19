'use client';

import React, { useEffect, useState } from 'react';

import { useToast } from '@/common';
import { Toast as ToastComponent, ToastProps } from '@/common/components/Toast';

const Toast = () => {
  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  useEffect(() => {
    setToastData(getSavedToastInfo());

    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (toastData === null) {
    return null;
  }

  return (
    <ToastComponent
      isShow={toastData.isShow}
      type={toastData.type}
      direction={toastData.direction}
      title={toastData.title}
    />
  );
};

export default Toast;
