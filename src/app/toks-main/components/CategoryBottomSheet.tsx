'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { BottomSheet, ICON_URL, Tab, Text } from '@/common';
import { usePreventScroll } from '@/common/hooks';
import { useCategoriesQuery, useSelectedCategoriesQuery } from '@/queries';
import { isVisibleCategoryBottomSheetAtom } from '@/store';

import { CategoryButtonGroups } from './CategoryButtonGroups';
import { useCategoryUpdateMutation } from '../hooks/useCategoryUpdateMutation';

export const CategoryBottomSheet = () => {
  const { mutate: updateCategories } = useCategoryUpdateMutation();
  const { data: selectedCategory = [] } = useSelectedCategoriesQuery();
  const { data: categoryQuery } = useCategoriesQuery();
  const [isShow, setIsShow] = useRecoilState(isVisibleCategoryBottomSheetAtom);
  const [selectedTab, setSelectedTab] = useState(0);
  usePreventScroll(isShow);

  const renderTabContent = () => {
    const panel = categoryQuery?.panels[selectedTab];
    if (!panel || panel.length === 0) {
      return null;
    }

    const buttons = panel.map(({ id, name }) => ({
      label: name,
      value: id,
    }));

    return (
      <CategoryButtonGroups
        buttons={buttons}
        selectedButtons={selectedCategory}
        onClick={(value) => {
          updateCategories([value]);
        }}
      />
    );
  };

  return (
    <BottomSheet
      isShow={isShow}
      onClose={() => {
        setIsShow(false);
      }}
    >
      <div className="flex items-center justify-between px-20px pb-16px pt-26px">
        <Text typo="headingM" color="white">
          관심 카테고리 선택
        </Text>
        <button>
          <Image
            src={ICON_URL.THUMBS_UP_FILLED}
            alt="close"
            width={24}
            height={24}
          />
        </button>
      </div>
      <Tab
        activeIndex={selectedTab}
        tabs={categoryQuery?.tabs ?? []}
        onTabChange={(index) => {
          setSelectedTab(index);
        }}
      />
      {renderTabContent()}
    </BottomSheet>
  );
};
