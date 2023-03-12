import { theme } from '@depromeet/theme';
import { BP, Image, MAX_WIDTH, Text, imageUrl } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';

interface Props {
  img: string;
  name: string;
  nickname: string;
  handleLogout: VoidFunction;
}

export function UserMenu({ img, name, nickname, handleLogout }: Props) {
  const hasIndividualProfile = img !== imageUrl.baseKakao;

  return (
    <UserMenuCard>
      <UserInfo>
        <Image
          src={hasIndividualProfile ? img : imageUrl.baseToks}
          alt=""
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
        />
        <Flex direction="column" align="flex-start" style={{ gap: '4px' }}>
          <Text variant="subhead" color="white">
            {name}
          </Text>
          <Text variant="body03" color="gray030">
            {nickname}
          </Text>
        </Flex>
      </UserInfo>

      <Spacing size={16} />

      <hr
        style={{
          width: '100%',
          border: `0.1px solid ${theme.colors.gray080}`,
        }}
      />

      <Spacing size={18} />

      <TextButton variant="subhead" color="gray070" onClick={handleLogout}>
        로그아웃
      </TextButton>
    </UserMenuCard>
  );
}

const UserMenuCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px;
  top: 70px;
  right: 96px;

  position: absolute;
  width: 254px;

  border-radius: 16px;

  background-color: ${theme.colors.gray100};

  ${theme.shadows.book01};

  @media (min-width: ${MAX_WIDTH}) {
    right: calc(96px + (100vw - ${MAX_WIDTH}) / 2);
  }

  @media (max-width: ${BP.mobile}) {
    right: 16px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 12px;
`;

const TextButton = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`;
