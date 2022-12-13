import { UseQueryOptions, useQuery } from 'react-query';

import { REACT_QUERY_KEY } from 'constants/query';
import { GetUserResponse } from 'interfaces/user';
import { getUserinfo } from 'pages/MyName/remote/nickName';

export const useUserInfo = (options?: UseQueryOptions<GetUserResponse, Error>) => {
  return useQuery<GetUserResponse, Error>([REACT_QUERY_KEY.NICKNAME], getUserinfo, options);
};
