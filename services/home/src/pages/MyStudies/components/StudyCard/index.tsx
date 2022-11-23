import { theme } from '@depromeet/theme';
import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Spacing, padding, width100 } from '@toss/emotion-utils';
import { useSuspendedQuery } from '@toss/react-query';
import { QUERY_KEYS } from 'constants/queryKeys';
import { getHasNewQuiz } from 'pages/MyStudies/remotes/study';
import { useMutation } from 'react-query';

import { Study } from '../../models/study';

interface Props extends Pick<Study, 'title' | 'tags'> {
  onClick: () => Promise<void>;
  memberCount: number;
  studyId: number;
}

const IMG_MAP = {
  sleep: 'https://asset.tokstudy.com/sleep-yellow-emoji.png',
  awake: 'https://asset.tokstudy.com/awake-yellow-emoji.png',
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

      <Image src={hasNewQuiz ? IMG_MAP.awake : IMG_MAP.sleep} alt="" draggable={false} width={90} height={90} />

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

  ${theme.shadows.book01}
`;

StudyCard.Skeleton = Card;

export default StudyCard;
