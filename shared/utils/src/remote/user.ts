import { http, isToksError } from '@depromeet/http';

export interface User {
  email: string;
  nickname: string;
  thumbnailImageUrl: string;
  profileImageUrl: string;
}

async function getUser() {
  return await http.get<User>('/api/v1/user', { public: true });
}

export async function safelyGetUser() {
  try {
    return await getUser();
  } catch (err) {
    if (isToksError(err) && err.status === 401) {
      return null;
    }
    throw err;
  }
}

safelyGetUser.queryKey = ['getUser'];
