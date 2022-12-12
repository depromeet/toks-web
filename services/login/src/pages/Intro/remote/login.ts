import { http } from '@depromeet/http';

export function login() {
  return http.get('https://api.tokstudy.com/oauth2/authorize/kakao');
}
