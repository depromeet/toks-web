<<<<<<< HEAD
import { http } from '@depromeet/http';

export const getNickname = async () => {
  try {
    return await http.get('/api/v1/user/nickname');
  } catch (error) {
    console.log(error);
  }
};
=======
import axios from 'axios';

// TODO: http 패키지 배포 이후 뱐걍 예정
const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;

const instance = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { 'Content-Type': 'application/json', Authorization: `${accessToken}` },
});

export function getNickname() {
  return instance.get('/api/v1/user').then(res => res.data);
}

export function patchNickname(nickname: string) {
  return instance.patch('/api/v1/user/nickname', nickname).then(res => res.data);
}
>>>>>>> 43f7e68 (:sparkles: feat: 닉네임 api fetching 완료)
