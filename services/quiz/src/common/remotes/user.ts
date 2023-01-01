import { http } from '@depromeet/http';
import { UserInfoResponse } from 'common/models/user';

export async function getUser() {
  return await http.get<UserInfoResponse>(`/api/v1/user`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb29oOTYwNDA3QG5hdmVyLmNvbSIsImlhdCI6MTY3MTQ3MTMwMiwiZXhwIjoyMDQ0NzE5MzAyfQ.sp4-Y5XvsnMfNfVe1wbWE9xnTsNMJT8dR1QTAuNsM7A',
    },
  });
}
