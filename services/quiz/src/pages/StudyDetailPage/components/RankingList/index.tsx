import { ErrorBoundary } from '@toss/error-boundary';
import { RankingItem } from '../RankingItem';
import { List } from './style';
import { useSuspendedQuery } from '@toss/react-query';
import { SSRSuspense } from '@depromeet/toks-components';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getRankingList } from 'pages/StudyDetailPage/remote/quiz';

function RankingList() {
  const { data: rankingList } = useSuspendedQuery(QUERY_KEYS.GET_RANKING_LIST, getRankingList);

  return (
    <List>
      {rankingList.map(rankingItem => (
        <RankingItem {...rankingItem} />
      ))}
    </List>
  );
}

export default () => (
  // TODO: fallback 개선
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense
      fallback={<div>Ranking Skeleton</div>}>
      <RankingList/>
    </SSRSuspense>
  </ErrorBoundary>
);