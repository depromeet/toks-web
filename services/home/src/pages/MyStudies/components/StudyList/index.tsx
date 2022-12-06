import { PATHS } from '@depromeet/path';
import { SSRSuspense } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';
import { useRouter } from 'next/router';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getMyStudies } from 'pages/MyStudies/remotes/study';

import StudyCard from '../StudyCard';

function StudyList() {
  const { data: myStudies } = useSuspendedQuery(QUERY_KEYS.GET_MY_STUDIES, getMyStudies);
  const router = useRouter();

  return (
    <Flex css={{ gap: '32px' }} as="ul">
      {myStudies.map(study => (
        <SSRSuspense fallback={<StudyCard.Skeleton />} key={study.id}>
          <StudyCard
            title={study.title}
            tags={study.tags}
            onClick={async () => {
              await router.push(PATHS.quiz.studyDetail({ studyId: study.id }));
            }}
            memberCount={study.member.length}
            studyId={study.id}
          />
        </SSRSuspense>
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
