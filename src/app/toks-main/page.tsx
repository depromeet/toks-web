'use client';
import { useEffect, useState } from 'react';

import { FloatingButton, Toast } from '@/common';
import { useToast } from '@/common/hooks/useToast';

import { CardList } from './components/CardList';

function ToksMainPage() {
  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<any>();

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
          direction={toastData.top}
          title={toastData.title}
        />
      )}
      <CardList />
      <FloatingButton />
    </div>
  );
}

export default ToksMainPage;
