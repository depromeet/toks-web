import axios from 'axios';
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

http.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers['X-TOKS-AUTH_TOKEN'] = `${accessToken}`;
  }
  return config;
});
http.interceptors.response.use((response) => response.data);
