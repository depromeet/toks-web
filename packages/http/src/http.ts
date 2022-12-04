import axios from 'axios';
import { useNextRouter } from '@toss/use-query-param';

const authToken = {
  access: sessionStorage.getItem('accessToken'),
  refresh: sessionStorage.getItem('refreshToken'),
};

export function Auth() {
  const router = useNextRouter();
  // 엑세스 토큰이 없는 경우 로그인 페이지로 라우팅
  if (sessionStorage.getItem('accessToken') == null) {
    router.push('https://api.tokstudy.com/oauth2/authorize/kakao');
  }
}

//axios instance
export const instance = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { Authorization: `Bearer ${authToken?.access}` },
});

//1. 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    //@ts-ignore
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    //@ts-ignore
    if (!config.headers['Authorization']) {
      //@ts-ignore
      config.headers['Authorization'] = `${authToken?.access}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//2. 응답 인터셉터
instance.interceptors.response.use(function (error) {
  const prevRequest = error?.config;
  if (error?.status === 401 && error?.data?.message === 'error.invalid.access.token') {
    //리프레쉬 토큰 보내서 accesstoken 업데이트
    const newAccessToken = '';
    //@ts-ignore
    error?.config?.headers['Authorization'] = $`${newAccessToken}`;
  }

  return Promise.reject(error);
});
