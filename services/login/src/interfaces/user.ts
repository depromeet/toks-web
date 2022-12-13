import { AxiosError } from 'axios';

export interface GetUserResponse {
  email: string;
  nickname: string;
  thumbnailImageUrl: string;
  profileImageUrl: string;
}

export interface SetNickname {
  nickname: string;
}

// http 패키지 배포 이후 삭제 예정 직접 import 해올 것.
export interface CustomAxiosError extends AxiosError {
  timestamp?: number;
  code: string | number;
  httpStatus: string;
  message: string;
  statusCode: number;
}
