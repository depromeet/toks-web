import { SSRSuspense, Tag, Text, UserAvatar } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';

import { useGetStudyInfo } from 'quiz/pages/StudyDetailPage/hooks/queries/studyInfo';

import { StudyProgress } from '../StudyProgress';
import { Body, FlexRow, Footer, Header, Info, Skeleton, Space } from './style';

interface StudyInfoProps {
  studyId: string;
}

function StudyInfo({ studyId }: StudyInfoProps) {
  const { data: studyInfo } = useGetStudyInfo(studyId);

  const { name: title, description, tags: studyTags, users: members, startedAt, endedAt, progress } = studyInfo;

  return (
    <FlexRow>
      <Info>
        <Header>
          <Text
            color="white"
            variant="title01"
            css={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              margin: '0 0 16px 0',
            }}
            as="h1"
          >
            {title}
          </Text>
        </Header>
        <Body>
          <Text color="gray020" variant="body02">
            {description}
          </Text>
          <Tag.Row style={{ marginTop: '20px', padding: 0 }}>
            {studyTags && studyTags.map(({ id, name }) => <Tag key={id} value={name} />)}
          </Tag.Row>
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
      <Space css={{ flex: 1 }} />
      <StudyProgress progress={progress} startedAt={startedAt} endedAt={endedAt} />
    </FlexRow>
  );
}

export default ({ studyId }: StudyInfoProps) => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={<Skeleton />}>
      <StudyInfo studyId={studyId} />
    </SSRSuspense>
  </ErrorBoundary>
);
