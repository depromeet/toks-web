import { http } from '@depromeet/http';

export async function getNickname() {
  return await http.get('/api/v1/user');
}

export async function patchNickname(nickname: string) {
  return await http.patch('/api/v1/user/nickname', nickname);
}
