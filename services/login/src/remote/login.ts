import axios from 'axios';

// TODO: http 패키지 배포 이후 변경 예정 api fetching test 용
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
