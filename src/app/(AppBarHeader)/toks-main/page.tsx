import { Suspense } from 'react';

import { CardList } from './_components/CardList';
import { SkeletonCardList } from './_components/SkeletonCard';

function ToksMainPage() {
  return (
    <div className="flex-col">
      <Suspense fallback={<SkeletonCardList />}>
        <CardList />
      </Suspense>
    </div>
  );
}

export default ToksMainPage;
