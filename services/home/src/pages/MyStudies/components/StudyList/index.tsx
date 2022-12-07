import { PATHS } from '@depromeet/path';
import { SSRSuspense, useToast } from '@depromeet/toks-components';

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
  const { open } = useToast();

  return (
    <Flex css={{ gap: '32px', alignSelf: 'flex-start', width: '90%', margin: '0 auto' }} as="ul">
      {myStudies.map(study => (
        <SSRSuspense fallback={<StudyCard.Skeleton />} key={study.id}>
          <StudyCard
            title={study.title}
            tags={study.tags}
            onClick={async () => {
              // 토스트 예시
              await open({ title: '스터디를 눌렀습니다', type: 'success', direction: ['left', 'top'], time: 10000 });
              await open({ title: '스터디를 눌렀습니다2', type: 'danger', direction: 'bottom' });

              await router.push(PATHS.quiz.studyDetail({ studyId: study.id }));
            }}
            memberCount={study.member.length}
            studyId={study.id}
          />
        </SSRSuspense>
      ))}
      {/* TODO: 스터디 생성 로직 구현 */}
      {myStudies.length < 4 ? <StudyCard.Plus onClick={() => {}} /> : null}
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
