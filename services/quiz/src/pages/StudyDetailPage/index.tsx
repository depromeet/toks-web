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
          <UserAvatar.Group view={6} id="8">
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="31" userName="윤두현1" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="32" userName="윤두현2" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="33" userName="윤두현3" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="34" userName="윤두현4" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="35" userName="윤두현5" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="36" userName="윤두현6" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="37" userName="윤두현7" size="large" />
            <UserAvatar image="https://asset.tokstudy.com/img_penguin.png" id="38" userName="윤두현8" size="large" />
          </UserAvatar.Group>
        </Wrapper>
      </Section>
    </Page>
  );
}
