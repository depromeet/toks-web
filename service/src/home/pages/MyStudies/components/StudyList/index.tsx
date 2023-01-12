import { PATHS } from '@depromeet/path';
import { SSRSuspense } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { QUERY_KEYS } from 'home/constants/queryKeys';
import { getMyStudies } from 'home/pages/MyStudies/remotes/study';

import StudyCard from '../StudyCard';

const MAX_STUDY_CNT = 4;

function StudyList() {
  const {
    data: { studies },
  } = useSuspendedQuery(QUERY_KEYS.GET_MY_STUDIES, getMyStudies);
  const router = useRouter();

  useEffect(() => {
    studies.forEach(({ id }) => {
      router.prefetch(PATHS.quiz.studyDetail({ studyId: id }));
    });

    router.prefetch(PATHS.onboarding.createStudy);
  }, [router, studies]);

  return (
    <StudyListRow
      as="ul"
      hasIssue={studies.some(
        ({ latestQuizStatus }) => latestQuizStatus === 'UNCHECKED' || latestQuizStatus === 'UNSOLVED'
      )}
    >
      {studies.map(study => (
        <SSRSuspense fallback={<StudyCard.Skeleton />} key={study.id}>
          <StudyCard
            title={study.name}
            tags={study.tags}
            memberCount={study.userCount}
            studyId={study.id}
            quizStatus={study.latestQuizStatus}
            studyStatus={study.status}
            onClick={() => router.push(PATHS.quiz.studyDetail({ studyId: study.id }))}
          />
        </SSRSuspense>
      ))}

      {studies.length < MAX_STUDY_CNT && <StudyCard.Plus onClick={() => router.push(PATHS.onboarding.createStudy)} />}
    </StudyListRow>
  );
}

const StudyListRow = styled(Flex)<{ hasIssue?: boolean }>`
  gap: 32px;
  align-self: flex-start;
  width: min(100%, 1260px);
  margin: 0 auto;
  padding: ${({ hasIssue }) => (hasIssue ? `60px 20px 8px 20px` : '8px 20px')};
  overflow-x: auto;
`;

export default () => (
  // TODO: fallback 개선
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense
      fallback={
        <StudyListRow css={{ visibility: 'hidden' }}>
          <StudyCard.Skeleton />
        </StudyListRow>
      }
    >
      <StudyList />
    </SSRSuspense>
  </ErrorBoundary>
);
