import { Suspense } from 'react';

import CartListSuspense from './_components/CartListSuspense';
import { SkeletonCardList } from './_components/SkeletonCard';

export default async function ToksMainPage() {
  return (
    <div className="flex-col">
      <Suspense fallback={<SkeletonCardList />}>
        <CartListSuspense />
      </Suspense>
    </div>
  );
}
