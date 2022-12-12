import axios from 'axios';
import { http } from '@depromeet/http';

export function getNickname() {
  return http.get('/api/v1/user').then(res => res.data);
}

export function patchNickname(nickname: string) {
  return http.patch('/api/v1/user/nickname', nickname).then(res => res.data);
}
