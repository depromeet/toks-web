import styled from '@emotion/styled';
import { theme } from '@depromeet/theme';
import { Button, Image, Tag, Txt } from '@depromeet/toks-components';
import { padding, Spacing, width100 } from '@toss/emotion-utils';
import { useMutation } from 'react-query';
import { Study } from '../../models/study';

interface Props extends Pick<Study, 'img' | 'title' | 'tags'> {
  onClick: () => unknown;
  memberCount: number;
}

function StudyCard({ img, title, tags, onClick, memberCount }: Props) {
  const { mutateAsync: handleClick, isLoading } = useMutation(async () => onClick());

  return (
    <Card>
      <Txt size={14} weight={400} color={theme.colors.gray050} css={{ lineHeight: '20px', alignSelf: 'flex-end' }}>
        {memberCount}명 입장
      </Txt>

      <Spacing size={22} />

      <Image src={img} alt="" draggable={false} width={80} height={80} />

      <Spacing size={40} />

      <Txt size={26} weight={700} css={{ minHeight: '72px' }}>
        {title}
      </Txt>

      <Spacing size={22} />

      <Tag.Row css={[width100, padding(0)]}>
        {tags.map(tag => (
          <Tag value={tag} key={tag} />
        ))}
      </Tag.Row>

      <Spacing size={58} />

      <Button type="primary" css={{ justifySelf: 'flex-end' }} onClick={() => handleClick()} loading={isLoading}>
        입장하기
      </Button>
    </Card>
  );
}

const Card = styled.li`
  position: relative;
  width: 280px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  background-color: ${theme.colors.gray090};
  border: 1px solid ${theme.colors.gray080};
  border-radius: 32px;

  ${theme.shadows.book01}
`;

StudyCard.Fallback = Card;

export default StudyCard;
