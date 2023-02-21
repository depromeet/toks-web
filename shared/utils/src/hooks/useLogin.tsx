import { useMutation } from 'react-query';

import { requestLogin } from '@depromeet/utils';

export function useLogin() {
  const { mutateAsync: login, isLoading } = useMutation(async () => {
    await requestLogin();
  });
  return { login, isLoading };
}
