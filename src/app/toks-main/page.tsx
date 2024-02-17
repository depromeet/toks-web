'use client';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { FloatingButton, NoticeSlider, Toast, ToastProps } from '@/common';
import { useToast } from '@/common/hooks';
import { isVisibleFloatingButtonBottomSheetAtom } from '@/store';

import { CardList } from './components/CardList';
import { MainPageBottomSheet } from './components/MainPageBottomSheet';

function ToksMainPage() {
  const { getSavedToastInfo, clearSavedToast } = useToast();
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  const [isOpenFloatingButtonBottomSheet, setIsOpenFloatingButtonBottomSheet] =
    useRecoilState(isVisibleFloatingButtonBottomSheetAtom);

  useEffect(() => {
    setToastData(getSavedToastInfo());
    clearSavedToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-col">
      {toastData && (
        <Toast
          isShow={toastData.isShow}
          type={toastData.type}
          direction={toastData.direction}
          title={toastData.title}
        />
      )}
      <NoticeSlider />
      <CardList />
      <FloatingButton
        onClick={() => setIsOpenFloatingButtonBottomSheet(true)}
      />
      <MainPageBottomSheet
        onClose={() => setIsOpenFloatingButtonBottomSheet(false)}
        isShow={isOpenFloatingButtonBottomSheet}
      />
    </div>
  );
}

export default ToksMainPage;
