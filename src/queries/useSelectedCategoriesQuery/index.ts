'use client';

import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/common/hooks';

import { getSelectedCategories } from './apis';

export const useSelectedCategoriesQuery = () => {
  const { isLogin } = useAuth();

  return useQuery({
    queryKey: ['selectedCategories'],
    queryFn: getSelectedCategories,
    enabled: isLogin,
    select: ({ categoryIds }) => categoryIds,
  });
};
