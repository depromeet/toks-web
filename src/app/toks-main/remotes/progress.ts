import { http } from '@/common';

import { NoticeResponse, ProgressResponse } from '../models/progress';

export const getProgress = async (month: number, year: number) => {
  return await http.get<ProgressResponse>(
    `api/v1/fab/user?year=${year}&month=${month}`
  );
};

export const getNotices = async () => {
  return await http.get<NoticeResponse>('api/v1/bottom-banners');
};
