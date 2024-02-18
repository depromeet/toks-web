'use client';

import { getCookie } from 'cookies-next';
import React, { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { Categories } from '@/common/components/Categories';
import { useSelectedCategoriesQuery } from '@/queries';
import { useCategoriesQuery } from '@/queries/useCategoriesQuery';
import {
  isVisibleCategoryBottomSheetAtom,
  selectedTemporaryCategoryAtom,
} from '@/store';

import { isSameCategory } from '../utils';

const QuizCategory = () => {
  const accessToken = getCookie('accessToken');
  const { data: categoryQuery } = useCategoriesQuery();
  const { data: selectedLoginCategory } = useSelectedCategoriesQuery();
  const selectedTemporaryCategory = useRecoilValue(
    selectedTemporaryCategoryAtom
  );

  const setIsOpenCategoryBottomSheet = useSetRecoilState(
    isVisibleCategoryBottomSheetAtom
  );

  const selectedCategory = Boolean(accessToken)
    ? selectedLoginCategory
    : selectedTemporaryCategory;

  const categories = categoryQuery?.tabs.map(({ name, id }) => {
    const isSelected =
      selectedCategory?.filter((categoryId) =>
        isSameCategory(categoryId, id)
      ) ?? [];

    return {
      categoryName: `${name} ${isSelected.length}`,
      isSelected: isSelected.length > 0,
    };
  });

  return (
    <Categories
      categories={categories ?? []}
      onClick={() => {
        setIsOpenCategoryBottomSheet(true);
      }}
    />
  );
};

export default memo(QuizCategory);
