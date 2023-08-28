import { http } from '@/common';

export const patchNickname = async (nickname: string) => {
  return await http.patch('/api/v1/user/nickname', { nickname });
};
