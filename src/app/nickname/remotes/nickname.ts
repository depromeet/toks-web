import { http } from '@/common/utils/http';

export const postNickname = async (nickname: string) => {
  return await http.post('/api/v1/user/nickname', nickname);
};
