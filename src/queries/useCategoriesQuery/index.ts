import { useQuery } from '@tanstack/react-query';

import { getCategories } from './apis';
import { Category, SubCategory } from './types';

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    select: ({ categories }) => {
      const { tabs, panels } = categories.reduce<{
        tabs: Array<{
          name: Category['name'];
          id: Category['id'];
        }>;
        panels: SubCategory[][];
      }>(
        (prev, { name, id, subCategories }) => {
          prev.tabs.push({ name, id });
          prev.panels.push(subCategories);
          return prev;
        },
        { tabs: [], panels: [] }
      );

      return { tabs, panels };
    },
  });
};
