import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { Image } from '../Image';
import { Text } from '../Text';

type MemberProps = {
  imgUrl: string;
  userName: string;
  onClickButton: VoidFunction;
  onClickLogo: VoidFunction;
  login: true;
};

type NonMemberProps = {
  login: false;
  onClickButton: VoidFunction;
  onClickLogo: VoidFunction;
};

type HeaderProps = MemberProps | NonMemberProps;

type ProfileButtonProps = Omit<HeaderProps, 'onClickLogo'>;

function isMember(props: ProfileButtonProps): props is MemberProps {
  if (props.login) {
    return true;
  }
  return false;
}

export function ToksHeader({ onClickLogo, ...rest }: HeaderProps) {
  return (
    <Header>
      <ClickableImage
        src="https://asset.tokstudy.com/logo.png"
        alt="toks study"
        draggable={false}
        width={70}
        height={24}
        onClick={onClickLogo}
      />
      <ProfileButton {...rest} />
    </Header>
  );
}

function ProfileButton(props: ProfileButtonProps) {
  if (!isMember(props)) {
    return (
      <Button onClick={props.onClickButton}>
        <ClickableImage
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

  const { imgUrl, userName, onClickButton } = props;

  return (
    <Button onClick={onClickButton}>
      <ClickableImage src={imgUrl} alt="" width={22} height={22} style={{ borderRadius: '50%' }} />
      <Text variant="subhead" style={{ textOverflow: 'ellipsis' }}>
        {userName}
      </Text>
    </Button>
  );
}

ToksHeader.Skeleton = function () {
  return (
    <Header>
      <ClickableImage
        src="https://asset.tokstudy.com/logo.png"
        alt="toks study"
        draggable={false}
        width={70}
        height={24}
      />
      <Button>
        <ClickableImage
          src="https://asset.tokstudy.com/login-emoji.png"
          alt=""
          width={22}
          height={22}
          style={{ borderRadius: '50%' }}
        />
      </Button>
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

const ClickableImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;
