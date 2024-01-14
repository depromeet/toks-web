'use client';
import React from 'react';
import { useRecoilState } from 'recoil';

import { FloatingButton } from '@/common/components/FloatingButton';
import { isVisibleFloatingButtonBottomSheetAtom } from '@/store';

import { MainPageBottomSheet } from '../_components/MainPageBottomSheet';

const BottomSheet = () => {
  const [isOpenFloatingButtonBottomSheet, setIsOpenFloatingButtonBottomSheet] =
    useRecoilState(isVisibleFloatingButtonBottomSheetAtom);

  return (
    <>
      <FloatingButton
        onClick={() => setIsOpenFloatingButtonBottomSheet(true)}
      />
      <MainPageBottomSheet
        onClose={() => setIsOpenFloatingButtonBottomSheet(false)}
        isShow={isOpenFloatingButtonBottomSheet}
      />
    </>
  );
};

export default BottomSheet;
