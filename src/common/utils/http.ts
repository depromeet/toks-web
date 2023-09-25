import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { getNewToken } from '@/middleware';

import { API_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

export const http: HttpClient = axiosInstance;

export const authToken = {
  access: (() => {
    try {
      return getCookie('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return getCookie('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = getCookie('accessToken');
    authToken.refresh = getCookie('refreshToken');
    return;
  },
  destroy: () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

export const redirectToLoginPage = () => {
  const isDev = window.location.hostname === 'localhost';

  window.location.href = isDev
    ? 'http://localhost:3000/toks-main'
    : 'https://tokstudy.com/toks-main';
};

// axios error custom to toks error
export interface ToksErrorResponse {
  errorCode: string;
  reason: string;
}

export interface ToksError extends AxiosError<ToksErrorResponse> {
  response: AxiosResponse<ToksErrorResponse>;
  isToksError: true;
  reason: string;
  errorCode: string;
  status: number;
}

export function isToksError(error: unknown): error is ToksError {
  try {
    return (error as ToksError).isToksError === true;
  } catch {
    return false;
  }
}

function isAxiosErrorWithResponseData(
  error: unknown
): error is AxiosError & { response: AxiosResponse } {
  try {
    return axios.isAxiosError(error) && error.response?.data != null;
  } catch {
    return false;
  }
}

function createToksError(error: AxiosError): ToksErrorResponse | AxiosError {
  if (isAxiosErrorWithResponseData(error)) {
    const toksError = error as ToksError;

    toksError.isToksError = true;
    toksError.errorCode = toksError.response.data.errorCode;
    toksError.reason = toksError.response.data.reason ?? '';
    toksError.status = toksError.response.status;
  }

  return error;
}

http.interceptors.response.use(
  (response) => response,
  (originalError) =>
    Promise.reject(
      isAxiosError(originalError)
        ? createToksError(originalError)
        : originalError
    )
);

const publicAPIStore = new Set();

http.interceptors.response.use(
  (response) => response.data.data,
  async function (error: ToksError) {
    const requestUrl = error.config?.url ?? error.response?.config.url;

    if (requestUrl != null && publicAPIStore.has(requestUrl)) {
      publicAPIStore.delete(requestUrl);
      return null;
    }

    if (isToksError(error) && error.status === 401) {
      const refreshToken = getCookie('refreshToken') as string;
      try {
        // refresh로 accessToken 받아오는 로직 추가
        const token = await (
          await getNewToken({
            refreshToken,
          })
        ).json();

        if (token) {
          authToken.destroy();
          setCookie('accessToken', token.data.accessToken);
          setCookie('refreshToken', refreshToken);
        }
      } catch (e: unknown) {
        // 로그인 페이지로 리다이렉트
        authToken.destroy();
        redirectToLoginPage();
      }

      // redirect가 완료되고, API가 종료될 수 있도록 delay를 추가합니다.
      await delay(500);
      return null;
    } else {
      throw error;
    }
  }
);

http.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers['X-TOKS-AUTH-TOKEN'] = accessToken;
    http.defaults.headers.common['X-TOKS-AUTH-TOKEN'] = accessToken;
  }

  return config;
});

function delay(time: number) {
  return new Promise((res) => setTimeout(res, time));
}
