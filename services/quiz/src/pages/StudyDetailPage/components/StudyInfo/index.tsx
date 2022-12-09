import { Tag, UserAvatar } from '@depromeet/toks-components';

import { User } from '../../../../../utils/userUtils';
import { Body, Description, Footer, Header, Info, StudyTags, Title } from './style';

interface StudyInfoProps {
  studyId: string;
  title: string;
  description: string;
  studyTags: string[];
  members: User[];
}

const makeStudyTags = (tagInfos: string[]) => [...tagInfos].map(tagInfo => <Tag value={tagInfo} />);

export function StudyInfo({ studyId, title, description, studyTags, members }: StudyInfoProps) {
  return (
    <Info>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <Description>{description}</Description>
        <StudyTags>
          <Tag.Row style={{ padding: 0 }}>{makeStudyTags(studyTags)}</Tag.Row>
        </StudyTags>
      </Body>
      <Footer>
        {/* UserAvatar Group id가 여기서는 스터디 id가 되고 각 퀴즈에서는 퀴즈의 id가 됨 */}
        <UserAvatar.Group view={6} id={studyId}>
          {members.map((user, index) => (
            <UserAvatar key={index} {...user} size="large" className={`avatar--user_${user.id}`} />
          ))}
        </UserAvatar.Group>
      </Footer>
    </Info>
  );
}
