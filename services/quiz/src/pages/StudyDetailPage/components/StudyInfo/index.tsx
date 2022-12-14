import { SSRSuspense, Tag, Text, UserAvatar } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetStudyInfo } from 'pages/StudyDetailPage/hooks/queries/studyInfo';

import { Body, Footer, Header, Info, StudyTags } from './style';

function StudyInfo() {
  const { data: studyInfo } = useGetStudyInfo();
  const { studyId, title, description, studyTags, members } = studyInfo;
  return (
    <Info>
      <Header>
        <Text
          color="white"
          variant="title01"
          css={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
          as="h1"
        >
          {title}
        </Text>
      </Header>
      <Body>
        <Text color="gray020" variant="body02">
          {description}
        </Text>
        <StudyTags>
          <Tag.Row style={{ padding: 0 }}>
            {studyTags.map((tagInfo, index) => (
              <Tag key={index} value={tagInfo} />
            ))}
          </Tag.Row>
        </StudyTags>
      </Body>
      <Footer>
        {/* UserAvatar Group id가 여기서는 스터디 id가 되고 각 퀴즈에서는 퀴즈의 id가 됨 */}
        {/* TODO: id값을 string 변환 안하게 컴포넌트 수정해야 함 */}
        <UserAvatar.Group view={6} id={studyId.toString()} groupType="study">
          {members.map(user => (
            <UserAvatar key={user.id} {...user} size="large" className={`avatar--user_${user.id}`} tooltip={true} />
          ))}
        </UserAvatar.Group>
      </Footer>
    </Info>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <StudyInfo />
    </SSRSuspense>
  </ErrorBoundary>
);
