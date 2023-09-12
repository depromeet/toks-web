import { http } from '@/common';

import { GetSelectedCategoriesResponse } from './types';

export const getSelectedCategories = async () => {
  return await http.get<GetSelectedCategoriesResponse>('/api/v1/categories');
};
