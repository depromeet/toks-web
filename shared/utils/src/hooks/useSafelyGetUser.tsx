import { useSuspendedQuery } from '@toss/react-query';

import { safelyGetUser } from '../remote/user';

export function useSafelyGetUser() {
  return useSuspendedQuery(safelyGetUser.queryKey, safelyGetUser, {
    retry: false,
    refetchOnMount: true,
  });
}
