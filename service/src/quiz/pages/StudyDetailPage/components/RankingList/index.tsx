import { SSRSuspense } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetRankingList } from 'quiz/pages/StudyDetailPage/hooks/queries/rankingList';

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

  return (
    <List>
      {rankingList.quizRanks.map((rankItem, index) => (
        <RankingItem key={index} rankItem={rankItem} />
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
