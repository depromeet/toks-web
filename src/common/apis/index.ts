import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from 'axios';

type ToksRequestConfig = AxiosRequestConfig & {
  public?: boolean;
};

export interface ToksHttpClient extends AxiosInstance {
  request<T = any>(config: ToksRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: ToksRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: ToksRequestConfig
  ): Promise<T>;
  put<T = any>(url: string, data?: any, config?: ToksRequestConfig): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: ToksRequestConfig
  ): Promise<T>;
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

function isAxiosErrorWithResponseData(
  error: unknown
): error is AxiosError & { response: AxiosResponse } {
  try {
    return axios.isAxiosError(error) && error.response?.data != null;
  } catch {
    return false;
  }
}

function createToksErrorFromAxiosError(
  error: AxiosError
): ToksErrorResponse | AxiosError {
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
      return localStorage.getItem('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return localStorage.getItem('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = localStorage.getItem('accessToken');
    authToken.refresh = localStorage.getItem('refreshToken');
    return;
  },
  destroy: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

//axios instance
export const instance: ToksHttpClient = axios.create({
  baseURL: 'https://api.tokstudy.com',
  headers: {
    Authorization: authToken.access,
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => response,
  (originalError) =>
    Promise.reject(
      isAxiosError(originalError)
        ? createToksErrorFromAxiosError(originalError)
        : originalError
    )
);
