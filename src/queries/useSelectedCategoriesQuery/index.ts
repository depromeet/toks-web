'use client';

import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/common/hooks/useAuth';

import { getSelectedCategories } from './apis';

export const useSelectedCategoriesQuery = () => {
  const { isLogin, user } = useAuth();

  return useQuery({
    queryKey: ['selectedCategories', user?.nickname],
    queryFn: getSelectedCategories,
    staleTime: 1000 * 60,
    enabled: isLogin,
    // TODO: 임의로 Filter 추후 백엔드 수정 https://5gaeanmal.slack.com/archives/C048PJ8V47P/p1700661664449719
    select: ({ categoryIds }) => categoryIds.filter(Boolean),
  });
};
