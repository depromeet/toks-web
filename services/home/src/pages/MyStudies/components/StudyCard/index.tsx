import { theme } from '@depromeet/theme';
import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, Spacing, padding, width100 } from '@toss/emotion-utils';
import { useSuspendedQuery } from '@toss/react-query';
import { useMutation } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getHasNewQuiz } from 'pages/MyStudies/remotes/study';

import { Study } from '../../models/study';

interface Props extends Pick<Study, 'title' | 'tags'> {
  onClick: () => Promise<void>;
  memberCount: number;
  studyId: number;
}

const IMG_MAP = {
  sleep: 'https://asset.tokstudy.com/character-sleep.png',
  awake: 'https://asset.tokstudy.com/character-base-1.png',
} as const;

function StudyCard({ title, tags, onClick, memberCount, studyId }: Props) {
  const { mutateAsync: handleClick, isLoading } = useMutation(onClick);
  const {
    data: { hasNewQuiz },
  } = useSuspendedQuery(QUERY_KEYS.GET_HAS_NEW_QUIX(studyId), () => getHasNewQuiz({ studyId }));

  return (
    <Card>
      <Text size={14} weight={400} color={theme.colors.gray050} css={{ lineHeight: '20px', alignSelf: 'flex-end' }}>
        {memberCount}명 입장
      </Text>

      <Spacing size={12} />

      <Image
        src={hasNewQuiz ? IMG_MAP.awake : IMG_MAP.sleep}
        alt=""
        draggable={false}
        width={84}
        height={84}
        css={{ scale: '195%' }}
      />

      <Spacing size={24} />

      <Text variant="title04" css={{ minHeight: '72px', textAlign: 'center' }}>
        {title}
      </Text>

      <Spacing size={18} />

      <Tag.Row css={[width100, padding(0)]}>
        {tags.map(tag => (
          <Tag value={tag} key={tag} />
        ))}
      </Tag.Row>

      <Spacing size={52} />

      <Button
        type={hasNewQuiz ? 'primary' : 'general'}
        css={{ justifySelf: 'flex-end' }}
        onClick={() => handleClick()}
        loading={isLoading}
      >
        입장하기
      </Button>
    </Card>
  );
}

function Plus({ onClick }: { onClick: () => void }) {
  return (
    <Card
      css={{
        justifyContent: 'center',
        gap: '18px',
        boxShadow: 'none',
        border: 'none',
      }}
      onClick={onClick}
    >
      <Flex.Center css={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: theme.colors.gray090 }}>
        <i className="pi pi-plus" style={{ fontSize: '36px', color: theme.colors.white }} />
      </Flex.Center>
      <Text variant="headline" color={theme.colors.gray070}>
        스터디 만들기
      </Text>
    </Card>
  );
}

const Card = styled.li`
  position: relative;
  min-width: 280px;
  width: 280px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  background-color: ${theme.colors.gray110};
  border: 1px solid ${theme.colors.gray100};
  border-radius: 32px;

  &:hover {
    cursor: pointer;
    transform: scale(102%);
  }

  transition: transform 100ms ease-in-out;

  ${theme.shadows.book01}
`;

StudyCard.Plus = Plus;
StudyCard.Skeleton = Card;

export default StudyCard;
