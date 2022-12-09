import { ToksHeader } from '@depromeet/toks-components';

import { QuizList } from 'components/StudyDetailPage/QuizList';
import { Ranking } from 'components/StudyDetailPage/Ranking';
import { StudyInfo } from 'components/StudyDetailPage/StudyInfo';
import { StudyProgress } from 'components/StudyDetailPage/StudyProgress';

import { members } from '../../../utils/userUtils';
import { Page, Section, Wrapper } from './style';

export default function StudyDetailPage() {
  return (
    <Page>
      <ToksHeader imgUrl={`https://asset.tokstudy.com/img_penguin.png`} userName={'윤두현'}/>
      <Section>
        <Wrapper>
          <StudyInfo
            studyId="12"
            title="아키텍쳐 크리너스너스너스너스너스"
            description="동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 "
            studyTags={['북 스터디', '기술 스터디', 'JavaScript']}
            members={members}
          />
          <StudyProgress />
          <Ranking />
          <QuizList />
        </Wrapper>
      </Section>
    </Page>
  );
}
