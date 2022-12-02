import axios from 'axios';
import { useNextRouter } from '@toss/use-query-param';

let authToken = {
  access: sessionStorage.getItem('accessToken'),
  refresh: sessionStorage.getItem('refreshToken'),
};

export function Auth() {
  const router = useNextRouter();

  if (!authToken?.access) {
    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }

    if (authToken?.access) {
      //accessToken이 없어서 쿼리에서 가져온 경우 닉네임 설정하는 페이지로 보내버리기
      router.push('http://localhost:3000/login/myName');
    }
  } else if (authToken?.access) {
    //accessToken이 있는 경우 home으로 리다이렉트
    router.push('http://localhost:3000/home');
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
  /*
    401에러인경우 
        */
  return Promise.reject(error);
});
