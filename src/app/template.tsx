'use client';

import { usePathname } from 'next/navigation';

import { Appbar, BackHeader, GlobalPortal } from '@/common';

import { CategoryBottomSheet } from './toks-main/components/CategoryBottomSheet';

export default function Template({ children }: StrictPropsWithChildren) {
  // TODO: useAuth hook 구현
  // TODO: useLogin Modal hook 구현
  // TODO: GlobalPortal 제거
  const pathName = usePathname();

  return (
    <GlobalPortal.Provider>
      {pathName === '/toks-main' ? (
        <>
          <Appbar />
          {children}
          <CategoryBottomSheet />
        </>
      ) : (
        <>
          <BackHeader />
          {children}
        </>
      )}
    </GlobalPortal.Provider>
  );
}
