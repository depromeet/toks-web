import { SSRSuspense } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetRankingList } from 'pages/StudyDetailPage/hooks/queries/rankingList';

import { RankingItem } from '../RankingItem';
import { List } from './style';

function RankingList() {
  const { data: rankingList } = useGetRankingList();

  // TODO: 서버에서 랭킹 숫자 내려주냐 안내려주냐에 따라서 랭킹 추가하는 부분 구성해야 함
  return (
    <List>
      {rankingList.map((rankItem, index) => (
        <RankingItem 
          key={rankItem.rankingId}
          ranking={index + 1}
          rankItem={rankItem}/>
      ))}
    </List>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <RankingList />
    </SSRSuspense>
  </ErrorBoundary>
);
