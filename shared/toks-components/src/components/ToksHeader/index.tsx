import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { Image } from '../Image';
import { Text } from '../Text';

interface HeaderProps {
  imgUrl: string;
  userName: string;
  onClickButton: VoidFunction;
  login: boolean;
}

export function ToksHeader(props: HeaderProps) {
  return (
    <Header>
      <Image src="https://asset.tokstudy.com/logo.png" alt="toks study" draggable={false} width={70} height={24} />
      <ProfileButton {...props} />
    </Header>
  );
}

function ProfileButton({ imgUrl, userName, onClickButton, login }: HeaderProps) {
  if (!login) {
    return (
      <Button>
        <Image
          src="https://asset.tokstudy.com/login-emoji.png"
          alt=""
          width={22}
          height={22}
          style={{ borderRadius: '50%' }}
        />
        <Text variant="subhead" style={{ textOverflow: 'ellipsis' }}>
          로그인
        </Text>
      </Button>
    );
  }

  return (
    <Button onClick={onClickButton}>
      <Image src={imgUrl} alt="" width={22} height={22} style={{ borderRadius: '50%' }} />
      <Text variant="subhead" style={{ textOverflow: 'ellipsis' }}>
        {userName}
      </Text>
    </Button>
  );
}

ToksHeader.Skeleton = function () {
  return (
    <Header>
      <Image src="https://asset.tokstudy.com/logo.png" alt="toks study" draggable={false} width={70} height={24} />
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  max-width: 1512px;
  min-width: 320px;
  height: 70px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  z-index: 1;
  justify-content: space-between;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  gap: 6px;
  height: 44px;
  width: 120px;
  align-items: center;
  border-radius: 25px;
  padding: 11px 22px;
  background-color: ${theme.colors.gray110};
  border: 2px solid ${theme.colors.gray080};

  &:hover {
    cursor: pointer;
  }
`;
