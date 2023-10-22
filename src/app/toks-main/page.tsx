'use client';
import { useEffect, useState } from 'react';

import { FloatingButton, Toast, ToastProps } from '@/common';
import { useToast } from '@/common/hooks';

import { CardList } from './components/CardList';
import { OnboardingBottomSheet } from './components/OnboardingBottomSheet';

function ToksMainPage() {
  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<ToastProps | null>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setToastData(getSavedToastInfo());
    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {toastData && (
        <Toast
          isShow={toastData.isShow}
          type={toastData.type}
          direction={toastData.direction}
          title={toastData.title}
        />
      )}
      <CardList />
      <FloatingButton onClick={() => setIsShow(true)} />
      <OnboardingBottomSheet onClose={() => setIsShow(false)} isShow={isShow} />
    </div>
  );
}

export default ToksMainPage;
