'use client';

import { usePathname } from 'next/navigation';
import { RecoilRoot } from 'recoil';

import { Appbar, GlobalPortal } from '@/common';

import { CategoryBottomSheet } from './toks-main/components/CategoryBottomSheet';

export default function Template({ children }: StrictPropsWithChildren) {
  // TODO: useAuth hook 구현
  // TODO: useLogin Modal hook 구현
  const pathName = usePathname();

  return (
    <RecoilRoot>
      <GlobalPortal.Provider>
        {pathName !== '/my-page' ? <Appbar /> : null}
        {children}
        <CategoryBottomSheet />
      </GlobalPortal.Provider>
    </RecoilRoot>
  );
}
