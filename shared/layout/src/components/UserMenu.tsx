import { theme } from '@depromeet/theme';
import { Image, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, Spacing } from '@toss/emotion-utils';

interface Props {
  img: string;
  name: string;
  nickname: string;
  handlekMyInfo: VoidFunction;
  handleLogout: VoidFunction;
}

export function UserMenu({ img, name, nickname, handleLogout, handlekMyInfo }: Props) {
  return (
    <UserMenuCard>
      <UserInfo>
        <Image src={img} alt="" width={40} height={40} style={{ borderRadius: '50%' }} />
        <Flex direction="column" align="flex-start" style={{ gap: '4px' }}>
          <Text variant="subhead" color="white">
            {name}
          </Text>
          <Text variant="body03" color="gray030">
            {nickname}
          </Text>
        </Flex>
      </UserInfo>

      <Spacing size={24} />

      <hr
        style={{
          width: '100%',
          border: `0.1px solid ${theme.colors.gray080}`,
        }}
      />

      <Spacing size={24} />

      <MyPageButton onClick={handlekMyInfo}>
        <Text variant="subhead" color="gray010">
          나의 정보
        </Text>
      </MyPageButton>

      <Spacing size={16} />

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
  right: 0;
  top: 70px;
  right: calc(9vw + 20px);

  position: absolute;
  width: 254px;
  height: 237px;

  border-radius: 16px;

  background-color: ${theme.colors.gray100};

  ${theme.shadows.book01};
`;

const UserInfo = styled.div`
  display: flex;
  gap: 12px;
`;

const MyPageButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  width: 198px;
  height: 42px;

  background: ${theme.colors.gray120};

  border: 1px solid ${theme.colors.gray080};
  border-radius: 32px;

  &:hover {
    background: ${theme.colors.gray110};
    cursor: pointer;
  }
`;

const TextButton = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`;
