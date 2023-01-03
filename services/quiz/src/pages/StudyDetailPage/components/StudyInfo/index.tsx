import { SSRSuspense, Tag, Text, UserAvatar } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetStudyInfo } from 'pages/StudyDetailPage/hooks/queries/studyInfo';

import { Body, Footer, Header, Info, StudyTags } from './style';

interface StudyInfoProps {
  studyId: string | string[] | undefined;
}

function StudyInfo({ studyId }: StudyInfoProps) {
  const { data: studyInfo, isError } = useGetStudyInfo(studyId);

  if (isError || studyInfo == null) {
    return null;
  }

  const { name: title, description, tags: studyTags, users: members } = studyInfo;

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
            {studyTags && studyTags.map(({ id, name }) => <Tag key={id} value={name} />)}
          </Tag.Row>
        </StudyTags>
      </Body>
      <Footer>
        {/* UserAvatar Group id가 여기서는 스터디 id가 되고 각 퀴즈에서는 퀴즈의 id가 됨 */}
        <UserAvatar.Group view={6} id={studyId as string} groupType="study">
          {members &&
            members.map(({ userId, nickname, profileImageUrl }) => (
              <UserAvatar
                key={userId}
                userName={nickname}
                image={profileImageUrl}
                size="large"
                className={`avatar--user_${userId}`}
                tooltip={true}
              />
            ))}
        </UserAvatar.Group>
      </Footer>
    </Info>
  );
}

export default ({ studyId }: StudyInfoProps) => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={null}>
      <StudyInfo studyId={studyId} />
    </SSRSuspense>
  </ErrorBoundary>
);
