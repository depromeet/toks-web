import { http } from '@/common';

import { ProgressResponse } from '../_models/progress';

export const getProgress = async (month: number, year: number) => {
  return await http.get<ProgressResponse>(
    `api/v1/fab/user?year=${year}&month=${month}`
  );
};
