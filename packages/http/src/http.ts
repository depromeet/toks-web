import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';

export interface ToksHttpClient extends AxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export interface ToksErrorResponse {
  code: string;
  httpStatus: string;
  message: string;
  statusCode: number;
}

export interface ToksError extends AxiosError<ToksErrorResponse> {
  response: AxiosResponse<ToksErrorResponse>;
  isToksError: true;
  message: string;
  code: string;
}

export function isToksError(error: unknown): error is ToksError {
  try {
    return (error as ToksError).isToksError === true;
  } catch {
    return false;
  }
}

function isAxiosErrorWithResponseData(error: unknown): error is AxiosError & { response: AxiosResponse } {
  try {
    return axios.isAxiosError(error) && error.response?.data != null;
  } catch {
    return false;
  }
}

function createTossBankErrorFromAxiosError(error: AxiosError): ToksErrorResponse | AxiosError {
  if (isAxiosErrorWithResponseData(error)) {
    const toksError = error as ToksError;

    toksError.isToksError = true;
    toksError.message = toksError.response.data.message;
    toksError.code = toksError.response.data.code ?? '';
  }

  return error;
}

const authToken = {
  access: typeof window === 'undefined' && typeof global !== 'undefined' ? null : sessionStorage.getItem('accessToken'),
  refresh:
    typeof window === 'undefined' && typeof global !== 'undefined' ? null : sessionStorage.getItem('refreshToken'),
};

const redirectToLoginPage = () => {
  const isDev = window.location.hostname === 'localhost';
  window.location.href = isDev ? 'http://localhost:3000/login' : 'https://tokstudy.com/login';
};

//axios instance
const instance: ToksHttpClient = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { Authorization: authToken?.access },
});

//1. 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    if (config?.headers == null) {
      throw new Error(`config.header is undefined`);
    }
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Authorization'] = authToken?.access;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  originalError =>
    Promise.reject(isAxiosError(originalError) ? createTossBankErrorFromAxiosError(originalError) : originalError)
);

//2. 응답 인터셉터
instance.interceptors.response.use(
  response => response.data,
  async function (error) {
    if (error?.status === 401 && error?.data?.code === -20027) {
      try {
        const {
          data: { refreshToken },
        } = await axios.post('/api/v1/user/renew', authToken.refresh);
        //refresh 유효한 경우 새롭게 accesstoken 설정

        if (error?.config.headers === undefined) {
          error.config.headers = {};
        } else {
          error.config.headers['Authorization'] = refreshToken;
          //sessionStorage에 새 토큰 저장
          sessionStorage.setItem('accessToken', refreshToken);
          // 중단된 요청 새로운 토큰으로 재전송
          const originalResponse = await axios.request(error.config);
          return originalResponse.data.data;
        }
      } catch (err) {
        redirectToLoginPage();
      }
    } else {
      throw error;
    }
  }
);

export const http: ToksHttpClient = instance;
