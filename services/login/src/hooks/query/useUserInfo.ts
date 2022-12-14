import { useSuspendedQuery } from '@toss/react-query';

import { REACT_QUERY_KEY } from 'constants/query';
import { getUserinfo } from 'pages/MyName/remote/nickName';

export const useUserInfo = () => {
  return useSuspendedQuery([REACT_QUERY_KEY.NICKNAME], getUserinfo);
};
