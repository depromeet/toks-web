'use client';

import { Appbar } from '@/common';

export default function Template({ children }: StrictPropsWithChildren) {
  // TODO: useAuth hook 구현
  // TODO: useLogin Modal hook 구현
  return (
    <>
      <Appbar />
      {children}
    </>
  );
}
