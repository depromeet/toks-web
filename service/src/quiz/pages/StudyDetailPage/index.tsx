import { Layout } from '@depromeet/layout';
import { Text } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Spacing } from '@toss/emotion-utils';
import { ReactElement } from 'react';

import QuizList from './components/QuizList';
import RankingList from './components/RankingList';
import StudyInfo from './components/StudyInfo';
import { FlexRow, Page, QuizListWrapper, RankingListWrapper, Section } from './style';

export default function StudyDetailPage() {
  const studyId = usePathParam('studyId', { suspense: true });

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
      <Spacing size={120} />
    </Page>
  );
}

StudyDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout fullWidth>{page}</Layout>;
};
