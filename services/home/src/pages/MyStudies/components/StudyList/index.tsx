import { PATHS, pushTo } from '@depromeet/path';
import { SSRSuspense } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex } from '@toss/emotion-utils';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getMyStudies } from 'pages/MyStudies/remotes/study';

import StudyCard from '../StudyCard';

const MAX_STUDY_CNT = 4;

function StudyList() {
  const { data: myStudies } = useSuspendedQuery(QUERY_KEYS.GET_MY_STUDIES, getMyStudies);

  return (
    <StudyListRow as="ul">
      {myStudies.map(study => (
        <SSRSuspense fallback={<StudyCard.Skeleton />} key={study.id}>
          <StudyCard
            title={study.title}
            tags={study.tags}
            memberCount={study.member.length}
            studyId={study.id}
            onClick={() => pushTo(PATHS.quiz.studyDetail({ studyId: study.id }))}
          />
        </SSRSuspense>
      ))}

      {myStudies.length < MAX_STUDY_CNT && <StudyCard.Plus onClick={() => pushTo(PATHS.onboarding.createStudy)} />}
    </StudyListRow>
  );
}

const StudyListRow = styled(Flex)`
  gap: 32px;
  align-self: flex-start;
  width: min(100%, 1260px);
  margin: 0 auto;
  padding: 100px 20px;
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
