import { BackButton, ToksHeader, UserAvatar } from '@depromeet/toks-components';

import { QuizList } from 'components/StudyDetailPage/QuizList';
import { Ranking } from 'components/StudyDetailPage/Ranking';
import { StudyInfo } from 'components/StudyDetailPage/StudyInfo';
import { StudyProgress } from 'components/StudyDetailPage/StudyProgress';

import { Page, Section, Wrapper } from './style';

export default function StudyDetailPage() {
  return (
    <Page>
      <ToksHeader imgUrl={`https://asset.tokstudy.com/img_penguin.png`} userName={'윤두현'}>
        <BackButton />
      </ToksHeader>
      <Section>
        <Wrapper>
          <StudyInfo />
          <StudyProgress />
          <QuizList />
          <Ranking />
          <UserAvatar
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
          <UserAvatar
            label='+2'
            userNames={['윤두현', '현두윤']}
            size='large'/>
        </Wrapper>
      </Section>
    </Page>
  );
}
