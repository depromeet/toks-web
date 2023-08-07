'use client';

import { Appbar } from '@/common';
import { useAuth } from '@/common/hooks/useAuth';

export default function Template({ children }: StrictPropsWithChildren) {
  // TODO: useAuth hook 구현
  // TODO: useLogin Modal hook 구현
  const { isLogin } = useAuth();

  return (
    <>
      <Appbar isLogin={isLogin} />
      {children}
    </>
  );
}
