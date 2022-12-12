import { SSRSuspense } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getRankingList } from 'pages/StudyDetailPage/remote/quiz';

import { RankingItem } from '../RankingItem';
import { List } from './style';

function RankingList() {
  const { data: rankingList } = useSuspendedQuery(QUERY_KEYS.GET_RANKING_LIST, getRankingList);

  return (
    <List>
      {rankingList.map((rankingItem, index) => (
        <RankingItem key={index} {...rankingItem} />
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
