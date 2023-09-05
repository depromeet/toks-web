'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@/common';

export const useCategoryUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categories: string[]) => {
      return await http.post('/api/v1/categories', {
        categories,
      });
    },
    onMutate: async (categories: string[]) => {
      const previousCategories = queryClient.getQueryData<string[]>([
        'selectedCategories',
      ]);

      if (previousCategories) {
        await queryClient.cancelQueries({
          queryKey: ['selectedCategories'],
        });
        queryClient.setQueryData<string[]>(['selectedCategories'], categories);
        return () =>
          queryClient.setQueryData(['selectedCategories'], previousCategories);
      }
    },

    onError: (err, variables, rollback) => {
      if (rollback) {
        rollback();
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['selectedCategories']);
    },
  });
};
