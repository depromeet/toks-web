import { http } from '@depromeet/http';

export function login() {
  return http.get('/oauth2/authorize/kakao');
}
