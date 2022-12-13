import { SSRSuspense } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetRankingList } from 'pages/StudyDetailPage/hooks/queries/rankingList';

import { RankingItem } from '../RankingItem';
import { List } from './style';

function RankingList() {
  const { data: rankingList } = useGetRankingList();

  return (
    <List>
      {rankingList.map((rankingItem) => (
        <RankingItem key={rankingItem.rankingId} {...rankingItem} />
      ))}
    </List>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={<div>Ranking Skeleton</div>}>
      <RankingList />
    </SSRSuspense>
  </ErrorBoundary>
);
