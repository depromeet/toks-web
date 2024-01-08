import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { patchLogout } from './apis';

export const useLogoutQuery = (options?: UseMutationOptions) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      try {
        const res = await patchLogout();
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        //   TODO: path name 바뀔수도
        router.push('/toks-main');
        return res;
      } catch (err: unknown) {
        console.log(err);
      }
    },
    onSuccess: () => {
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
    },
    ...options,
  });
};
