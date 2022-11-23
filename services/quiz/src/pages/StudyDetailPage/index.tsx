import { Tag, Avatar, BackButton, ToksHeader } from '@depromeet/toks-components';
import { QuizList } from 'components/StudyDetailPage/QuizList';
import { Ranking } from 'components/StudyDetailPage/Ranking';
import { StudyInfo } from 'components/StudyDetailPage/StudyInfo';
import { StudyProgress } from 'components/StudyDetailPage/StudyProgress';

import { Page, Section, Wrapper } from './style';
//imgUrl={`https://asset.tokstudy.com/img_penguin.png`} size={"large"}
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
          <Tag.Row>
            <Tag value="javascript" />
            <Tag value="javascript" color="highlight" />
            <Tag value="javascript" color="highlight" />
            <Tag value="javascript" color="highlight" />
            <Tag value="javascript" color="highlight" />
            <Tag value="javascript" color="highlight" />
          </Tag.Row>
          <Avatar.Group>
          <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar 
            image='https://asset.tokstudy.com/img_penguin.png'
            userName='윤두현'
            size='large'/>
            <Avatar.Label
            label='+2'
            userNames={['윤두현', '현두윤']}
            size='large'/>
          </Avatar.Group>
        </Wrapper>
      </Section>
    </Page>
  );
}
