import { http } from '@depromeet/http';

export function logout() {
  return http.patch('/api/v1/user/logout');
}
