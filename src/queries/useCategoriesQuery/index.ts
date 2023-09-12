import { useQuery } from '@tanstack/react-query';

import { getCategories } from './apis';

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    select: ({ categories }) => {
      const tabs = categories.map(({ name }) => name);
      const panels = categories.map(({ subCategories }) => subCategories);

      return { tabs, panels };
    },
  });
};
