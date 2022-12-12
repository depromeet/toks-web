import { useMutation, UseMutationOptions } from 'react-query';
import { patchNickname } from 'pages/MyName/remote/nickName';
import { SetNickname } from 'interfaces/user';

export const useSetNickname = (options?: UseMutationOptions<SetNickname, Error, SetNickname>) => {
  return useMutation<SetNickname, Error, SetNickname>(patchNickname, options);
};
