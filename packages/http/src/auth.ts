import { authToken, http } from './http';

// TODO: 로그인 로직도 여기로 옮기기

export async function logout() {
  await http.patch('/api/v1/user/logout');
  authToken.destroy();
  return null;
}
