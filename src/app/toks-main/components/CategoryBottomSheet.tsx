'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { BottomSheet, Button, ICON_URL, Tab, Text } from '@/common';
import { useAuth, usePreventScroll } from '@/common/hooks';
import { useCategoriesQuery, useSelectedCategoriesQuery } from '@/queries';
import {
  isVisibleCategoryBottomSheetAtom,
  selectedTemporaryCategoryAtom,
} from '@/store';

import { CategoryButtonGroups } from './CategoryButtonGroups';
import { useCategoryUpdateMutation } from '../hooks/useCategoryUpdateMutation';

export const CategoryBottomSheet = () => {
  const { isLogin } = useAuth();
  const { mutate: updateCategories } = useCategoryUpdateMutation();
  const { data: selectedCategory = [] } = useSelectedCategoriesQuery();
  const [selectedLocalCategory, setSelectedLocalCategories] = useState<
    string[]
  >(selectedCategory ?? []);

  const setSelectedTemporaryCategory = useSetRecoilState(
    selectedTemporaryCategoryAtom
  );
  const { data: categoryQuery } = useCategoriesQuery();
  const [isShow, setIsShow] = useRecoilState(isVisibleCategoryBottomSheetAtom);
  const [selectedTab, setSelectedTab] = useState(0);
  usePreventScroll(isShow);

  const panel = categoryQuery?.panels[selectedTab];
  const buttons = panel?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  return (
    <BottomSheet
      className="flex h-categoryBottomSheet flex-col "
      isShow={isShow}
      onClose={() => {
        setIsShow(false);
      }}
    >
      <div className="flex items-center justify-between px-20px pb-16px pt-26px">
        <Text typo="headingM" color="white">
          관심 카테고리 선택
        </Text>
        <button onClick={() => setIsShow(false)}>
          <Image src={ICON_URL.CLOSE} alt="close" width={24} height={24} />
        </button>
      </div>
      <Tab
        activeIndex={selectedTab}
        tabs={categoryQuery?.tabs ?? []}
        onTabChange={(index) => {
          setSelectedTab(index);
        }}
      />
      <CategoryButtonGroups
        className="h-categoryArea overflow-auto"
        buttons={buttons ?? []}
        selectedButtons={selectedLocalCategory}
        onClick={(value) => {
          if (selectedLocalCategory.includes(value)) {
            setSelectedLocalCategories((prev) => {
              return prev.filter((v) => v !== value);
            });
            return;
          }
          setSelectedLocalCategories((prev) => [...prev, value]);
        }}
      />
      <div className="mt-auto px-20px py-24px">
        <Button
          className="h-48px w-full"
          backgroundColor="primaryDefault"
          textColor="gray10"
          onClick={() => {
            isLogin
              ? updateCategories(selectedLocalCategory)
              : setSelectedTemporaryCategory(selectedLocalCategory);
            setIsShow(false);
          }}
        >
          선택 완료
        </Button>
      </div>
    </BottomSheet>
  );
};
