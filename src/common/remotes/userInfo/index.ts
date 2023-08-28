import { http } from '@/common/utils/http';

import { GetUserInfo } from './types';

export const getUserInfo = async () => {
  return await http.get<GetUserInfo>('/api/v1/auth/my-infos');
};
