import { SSRSuspense } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetRankingList } from 'pages/StudyDetailPage/hooks/queries/rankingList';

import { RankingItem } from '../RankingItem';
import { List } from './style';

interface RankingListProps {
  studyId: string | string[] | undefined;
}

function RankingList({ studyId }: RankingListProps) {
  const { data: rankingList, isError } = useGetRankingList(studyId);

  if (isError || rankingList == null) {
    return null;
  }

  // TODO: 서버에서 랭킹 숫자 내려주냐 안내려주냐에 따라서 랭킹 추가하는 부분 구성해야 함
  return (
    <List>
      {rankingList.quizRanks.map(rankItem => (
        <RankingItem key={rankItem.rankingId} rankItem={rankItem} />
      ))}
    </List>
  );
}

export default ({ studyId }: RankingListProps) => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <RankingList studyId={studyId} />
    </SSRSuspense>
  </ErrorBoundary>
);
