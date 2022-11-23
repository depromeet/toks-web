import { SSRSuspense } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'constants/queryKeys';

import StudyCard from './components/StudyCard';
import { getMyStudies } from './remotes/study';

function StudyList() {
  const { data: myStudies } = useSuspendedQuery(QUERY_KEYS.GET_MY_STUDIES, getMyStudies);

  return (
    <Flex css={{ gap: '32px' }} as="ul">
      {myStudies.map(study => (
        <StudyCard
          img={study.img}
          title={study.title}
          tags={study.tags}
          // TODO: 스터디 참여 로직 구현
          onClick={async () => {}}
          memberCount={study.member.length}
          key={study.id}
        />
      ))}
    </Flex>
  );
}

export default () => (
  // TODO: fallback 개선
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <StudyList />
    </SSRSuspense>
  </ErrorBoundary>
);
