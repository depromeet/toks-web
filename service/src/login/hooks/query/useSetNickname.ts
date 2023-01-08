import { UseMutationOptions, useMutation } from 'react-query';

import { CustomAxiosError, SetNickname } from 'login/interfaces/user';
import { patchNickname } from 'login/pages/MyName/remote/nickName';

export const useSetNickname = (options?: UseMutationOptions<SetNickname, CustomAxiosError, SetNickname>) => {
  return useMutation<SetNickname, CustomAxiosError, SetNickname>(patchNickname, options);
};
