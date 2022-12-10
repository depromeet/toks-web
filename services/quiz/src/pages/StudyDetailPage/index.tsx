import { Text, ToksHeader } from '@depromeet/toks-components';

import { members } from '../../../utils/userUtils';
import { QuizList } from './components/QuizList';
import { Ranking } from './components/Ranking';
import { StudyInfo } from './components/StudyInfo';
import { StudyProgress } from './components/StudyProgress';
import { FlexRow, Page, Section, Wrapper } from './style';

export default function StudyDetailPage() {
  return (
    <Page>
      <ToksHeader imgUrl={`https://asset.tokstudy.com/img_penguin.png`} userName={'윤두현'} />
      <Section>
        <Wrapper>
          <FlexRow>
            <StudyInfo
              studyId="12"
              title="아키텍쳐 크리너스너스너스너스너스"
              description="동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 "
              studyTags={['북 스터디', '기술 스터디', 'JavaScript']}
              members={members}
            />
            <StudyProgress />
          </FlexRow>
          <FlexRow css={{ marginTop: '80px' }}>
            <div>
              <Text variant="title04" color="gray010">
                똑스
              </Text>
              <QuizList />
            </div>
            <div css={{marginLeft: '35px'}}>
              <Text variant="title04" color="gray010">
                똑순위
              </Text>
              <Ranking />
            </div>
          </FlexRow>
        </Wrapper>
      </Section>
    </Page>
  );
}
