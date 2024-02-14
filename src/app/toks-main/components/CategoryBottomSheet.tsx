'use client';

import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

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
  const [isShow, setIsShow] = useRecoilState(isVisibleCategoryBottomSheetAtom);
  const { mutate: updateCategories } = useCategoryUpdateMutation();
  const { isLogin } = useAuth();

  const { data: selectedLoginCategory = [] } = useSelectedCategoriesQuery();
  const [selectedLocalCategory, setSelectedLocalCategories] = useState<
    string[]
  >([]);

  const [selectedTemporaryCategory, setSelectedTemporaryCategory] =
    useRecoilState(selectedTemporaryCategoryAtom);

  usePreventScroll(isShow);

  const [selectedTab, setSelectedTab] = useState(0);
  const { data: categoryQuery } = useCategoriesQuery();
  const selectedPanel = categoryQuery?.panels[selectedTab];
  const buttons = selectedPanel?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  const tabs = categoryQuery?.tabs.map(({ name }) => name) ?? [];

  useLayoutEffect(() => {
    setSelectedTab(0);
    setSelectedLocalCategories([]);
  }, [isShow]);

  useEffect(() => {
    if (isLogin && isShow && selectedLoginCategory.length > 0) {
      setSelectedLocalCategories(selectedLoginCategory);
    }
  }, [isLogin, isShow, selectedLoginCategory]);

  useEffect(() => {
    if (selectedTemporaryCategory.length > 0 && isShow) {
      setSelectedLocalCategories(selectedTemporaryCategory);
    }
  }, [isShow, selectedTemporaryCategory]);

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
        tabs={tabs}
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
