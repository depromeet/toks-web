import { http } from '@depromeet/http';

import { GetUserResponse, SetNickname } from 'login/interfaces/user';

export async function getUserinfo({ accessToken }: { accessToken: string }) {
  return await http.get<GetUserResponse>('/api/v1/user', {
    headers: {
      Authorization: accessToken,
    },
  });
}

getUserinfo.queryKey = (accessToken: string) => ['getUserinfo', accessToken];

export async function patchNickname(nickname: SetNickname): Promise<SetNickname> {
  return await http.patch<SetNickname>('/api/v1/user/nickname', nickname);
}
