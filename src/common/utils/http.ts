import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

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

http.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers['X-TOKS-AUTH-TOKEN'] = `${accessToken}`;
  }
  return config;
});
http.interceptors.response.use((response) => response.data);
