import { http } from '@/common';

import { NoticeResponse } from '../models/notice';

export const getNotices = async () => {
  return await http.get<NoticeResponse>('api/v1/bottom-banners');
};
