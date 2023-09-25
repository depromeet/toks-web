'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function () {
  const router = useRouter();

  useLayoutEffect(() => {
    router.replace('/toks-main');
  }, [router]);

  return null;
}
