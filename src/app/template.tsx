'use client';

import { usePathname } from 'next/navigation';

import { Appbar, GlobalPortal } from '@/common';

export default function Template({ children }: StrictPropsWithChildren) {
  // TODO: useAuth hook 구현
  // TODO: useLogin Modal hook 구현
  const pathName = usePathname();

  return (
    <GlobalPortal.Provider>
      {pathName !== '/my-page' ? <Appbar /> : null}
      {children}
    </GlobalPortal.Provider>
  );
}
