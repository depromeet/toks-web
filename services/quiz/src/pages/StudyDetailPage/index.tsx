import { Text } from '@depromeet/toks-components';
import { useRouter } from 'next/router';

import QuizList from './components/QuizList';
import RankingList from './components/RankingList';
import StudyInfo from './components/StudyInfo';
import { StudyProgress } from './components/StudyProgress';
import { FlexRow, Page, QuizListWrapper, RankingListWrapper, Section } from './style';

export default function StudyDetailPage() {
  const {
    query: { studyId },
  } = useRouter();

  return (
    <Page>
      <Section>
        <FlexRow>
          <StudyInfo studyId={studyId} />
          <StudyProgress
            step='STEP3'
            startedAt="2022-09-24T01:02:29"
            endedAt="2023-01-14T00:03:03" />
        </FlexRow>
        <FlexRow css={{ marginTop: '80px' }}>
          <QuizListWrapper>
            <Text variant="title04" color="gray010">
              똑스
            </Text>
            <QuizList studyId={studyId} />
          </QuizListWrapper>
          <RankingListWrapper css={{ marginLeft: '35px' }}>
            <Text variant="title04" color="gray010">
              똑순위
            </Text>
            <RankingList studyId={studyId} />
          </RankingListWrapper>
        </FlexRow>
      </Section>
    </Page>
  );
}
