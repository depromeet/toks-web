export interface IUser {
  email: string;
  nickname: string;
  thumbnailImageUrl: string;
  profileImageUrl: string;
}

export interface IAxiosError {
  code: number;
  httpStatus: string;
  message: string;
  statusCode: number;
}
