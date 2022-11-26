import axios from 'axios';

let authToken = {
  //TODO: 액세스토큰 백에서 받아오는 작업 처리 필요
  access: 'token',
};

const instance = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { Authorizezation: `Bearer ${authToken?.access}` },
});
// authprovider를 만들어야하나?
//1. 요청 인터셉터

instance.interceptors.request.use(
  function (config) {
    //요청 보내기 전 수행할 일, 요청 성공 직전 호출
    // config.headers['Content-Type'] = 'application/json; charset=utf-8';
    // config.headers['Authorization'] = ' 토큰 값';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//2. 응답 인터셉터
instance.interceptors.response.use(
  function (response) {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */

    return response;
  },
  function (error) {
    /*
            http status가 200이 아닌 경우
            응답 에러 직전 호출됩니다.
            .catch() 으로 이어집니다.    
        */
    return Promise.reject(error);
  }
);

export default instance;
