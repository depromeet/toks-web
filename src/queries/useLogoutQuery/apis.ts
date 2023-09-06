import { http } from '@/common/utils/http';

export const patchLogout = async () => {
  return await http.patch('/api/v1/auth/logout');
};
