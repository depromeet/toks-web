import { Layout } from '@depromeet/layout';
import { Text } from '@depromeet/toks-components';
import { assert } from '@toss/assert';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { assert } from '@toss/assert';
import QuizList from './components/QuizList';
import RankingList from './components/RankingList';
import StudyInfo from './components/StudyInfo';
import { FlexRow, Page, QuizListWrapper, RankingListWrapper, Section } from './style';

export default function StudyDetailPage() {
  const {
    query: { studyId },
  } = useRouter();

  assert(typeof studyId === 'string', '유효하지 않은 스터디입니다.');

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

StudyDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout fullWidth>{page}</Layout>;
};
