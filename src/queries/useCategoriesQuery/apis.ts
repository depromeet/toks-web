import { http } from '@/common';

import { GetCategoriesResponse } from './types';

export const getCategories = async () => {
  return await http.get<GetCategoriesResponse>('/api/v1/categories/main');
};
