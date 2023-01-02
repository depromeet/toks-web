import { http } from '@depromeet/http';

import { UserInfoResponse } from 'common/models/user';

export async function getUser() {
  return await http.get<UserInfoResponse>(`/api/v1/user`);
}
