import { UseMutationOptions, useMutation } from 'react-query';

import { CustomAxiosError, SetNickname } from 'interfaces/user';
import { patchNickname } from 'pages/MyName/remote/nickName';

export const useSetNickname = (options?: UseMutationOptions<SetNickname, CustomAxiosError, SetNickname>) => {
  return useMutation<SetNickname, CustomAxiosError, SetNickname>(patchNickname, options);
};
