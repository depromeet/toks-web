import { Text } from '@depromeet/toks-components';
import { useRouter } from 'next/router';

import QuizList from './components/QuizList';
import RankingList from './components/RankingList';
import StudyInfo from './components/StudyInfo';
import { FlexRow, Page, QuizListWrapper, RankingListWrapper, Section } from './style';

export default function StudyDetailPage() {
  const {
    query: { studyId },
  } = useRouter();

  return (
    <Page>
      <Section>
        <StudyInfo studyId={studyId} />
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
