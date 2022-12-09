import axios from 'axios';

const authToken = {
  access: window == undefined ? null : sessionStorage.getItem('accessToken'),
  refresh: window == undefined ? null : sessionStorage.getItem('refreshToken'),
};

export function Auth() {
  // 엑세스 토큰이 없는 경우 로그인 페이지로 라우팅
  if (sessionStorage.getItem('accessToken') == null) {
    window.location.href = 'https://api.tokstudy.com/oauth2/authorize/kakao';
  }
}

//axios instance
const instance = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { Authorization: `Bearer ${authToken?.access}` },
});

//1. 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    //axios headers undefined issue로 인해 headers 재설정
    config.headers = {
      Authorization: `Bearer ${authToken?.access}`,
    };
    config!.headers['Content-Type'] = 'application/json; charset=utf-8';
    return config.data.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//2. 응답 인터셉터
instance.interceptors.response.use(async function (error) {
  if (error?.status === 401 && error?.data?.message === 'error.invalid.access.token') {
    //액세스 토큰이 invalid 한 경우 refresh 확인
    const res = await axios.post('/api/v1/user/renew', authToken.refresh);
    if (res.status === 201) {
      //refresh 유효한 경우 새롭게 accesstoken 설정
      const newAccessToken = res.data;
      if (error?.config.headers === undefined) {
        error.config.headers = {};
      } else {
        error.config.headers['Authorization'] = `${newAccessToken}`;
        // 중단된 요청 새로운 토큰으로 재전송
        const originalResponse = await axios.request(error.config);
        return originalResponse.data.data;
      }
    } else if (res.data.message === 'error.invalid.refresh.token') {
      // refresh invalid한 경우 다시 로그인
      window.location.href = 'https://api.tokstudy.com/oauth2/authorize/kakao';
    }
  }
  return Promise.reject(error);
});

export const http = instance;
