import axios from 'axios';

let authToken = {
  access: sessionStorage.getItem('accessToken'),
  refresh: sessionStorage.getItem('refreshToken'),
};

if (!authToken?.access || authToken?.access === '') {
  //쿼리에서 액세스 토큰 리프레쉬 토큰 가져오기
  //가져오고 accessToken이 null이 아니면 nickname페이지로 리다이렉트
  const params = new URLSearchParams(location.search);
  let accessToken = params.get('accssToken') || '';
  let refreshToken = params.get('refreshToken') || '';
  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('refreshToken', refreshToken);
  if (authToken?.access) {
    history.pushState('', '', 'https://tokstudy.com/login/myName');
  }
} else if (authToken?.access && authToken.access !== '') {
  // refresh 토큰 보내서 만료되었는지 확인?
  // 응답이 refresh 만료면 다시 로그인 페이지로
}

//axios instance
const instance = axios.create({
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

export default instance;
