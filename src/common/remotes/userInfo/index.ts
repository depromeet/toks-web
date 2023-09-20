import { http } from '@/common/utils/http';

import { GetUserInfo } from './types';

export const getUserInfo = async () => {
  return await http.get<GetUserInfo>('/api/v1/auth/my-infos');
};

export async function getFirstUserInfo({
  accessToken,
}: {
  accessToken: string;
}): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-TOKS-AUTH-TOKEN': accessToken,
    },
  });
}
