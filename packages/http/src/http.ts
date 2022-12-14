import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';

type ToksRequestConfig = AxiosRequestConfig & {
  public?: boolean;
};

export interface ToksHttpClient extends AxiosInstance {
  request<T = any>(config: ToksRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  post<T = any>(url: string, data?: any, config?: ToksRequestConfig): Promise<T>;
  put<T = any>(url: string, data?: any, config?: ToksRequestConfig): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: ToksRequestConfig): Promise<T>;
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
  status: number;
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
    toksError.status = toksError.response.status;
  }

  return error;
}

export const authToken = {
  access: (() => {
    try {
      return sessionStorage.getItem('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return sessionStorage.getItem('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = sessionStorage.getItem('accessToken');
    authToken.refresh = sessionStorage.getItem('refreshToken');
    return;
  },
  destroy: () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

export const redirectToLoginPage = () => {
  const isDev = window.location.hostname === 'localhost';
  const isLoginPage = window.location.href.includes('/login');

  if (isLoginPage) {
    return;
  }

  window.location.href = isDev ? 'http://localhost:3000/login' : 'https://tokstudy.com/login';
};

//axios instance
const instance: ToksHttpClient = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: { Authorization: authToken.access, 'Content-Type': 'application/json; charset=utf-8' },
  timeout: 5000,
});

const publicAPIStore = new Set();

//1. ?????? ????????????
instance.interceptors.request.use(
  function (config: ToksRequestConfig) {
    if (config?.headers == null) {
      throw new Error(`config.header is undefined`);
    }

    // ????????? ????????? Login Page??? Redirect?????? ????????? ???????????????.
    if (config.public) {
      publicAPIStore.add(config.url);
    }

    if (config.headers['Authorization'] == null) {
      authToken.refetch();
      config.headers['Authorization'] = authToken.access;
    }

    if (instance.defaults.headers.common['Authorization'] == null) {
      authToken.refetch();
      instance.defaults.headers.common['Authorization'] = authToken.access;
    }

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

//2. ?????? ????????????
instance.interceptors.response.use(
  response => response.data,
  async function (error: ToksError) {
    const requestUrl = error.config?.url ?? error.response?.config.url;

    if (requestUrl != null && publicAPIStore.has(requestUrl)) {
      publicAPIStore.delete(requestUrl);
      return null;
    }

    if (isToksError(error) && error.status === 401) {
      //refresh ?????? ?????? ?????? ??????
      redirectToLoginPage();
      // redirect??? ????????????, API??? ????????? ??? ????????? delay??? ???????????????.
      await delay(500);
      return null;
    } else {
      throw error;
    }
  }
);

function delay(time: number) {
  return new Promise(res => setTimeout(res, time));
}

export const http: ToksHttpClient = instance;
