import { http } from '@depromeet/http';

import { SetNickname } from 'interfaces/user';

export async function getUserinfo() {
  return await http.get('/api/v1/user');
}

export async function patchNickname(nickname: SetNickname): Promise<SetNickname> {
  return await http.patch('/api/v1/user/nickname', nickname);
}
