import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { BP, MAX_WIDTH, MIN_WIDTH, TOKS_HEADER_HEIGHT, emoji } from '../../constants';
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

const KAKAO_BASE_IMAGE = 'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg';
const BASE_IMAGE = 'https://toks-web-assets.s3.amazonaws.com/toks-emoji/ic-base-profile.png';

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
      <Button onClick={props.onClickButton} style={{ gap: 0, padding: '0 22px 0 12px' }}>
        <ClickableImage src={emoji.studying} alt="" width={40} height={40} style={{ borderRadius: '50%' }} />
        <Text variant="subhead" style={{ textOverflow: 'ellipsis', transform: 'translate(0px, 0.6px)' }}>
          로그인
        </Text>
      </Button>
    );
  }

  const { imgUrl, userName, onClickButton } = props;

  return (
    <Button onClick={onClickButton}>
      <ImageWrapper>
        <ClickableImage
          src={imgUrl === KAKAO_BASE_IMAGE ? BASE_IMAGE : imgUrl}
          alt=""
          width={22}
          height={22}
          style={{ borderRadius: '50%' }}
        />
      </ImageWrapper>
      <Text
        variant="subhead"
        style={{ display: 'block', textOverflow: 'ellipsis', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
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
  align-items: center;
  justify-content: space-between;

  min-width: ${MIN_WIDTH};
  width: 100vw;
  height: ${TOKS_HEADER_HEIGHT};
  margin: 0 auto;
  padding: 0 96px;
  z-index: 2;

  @media (min-width: ${MAX_WIDTH}) {
    padding: 0 calc(96px + (100vw - ${MAX_WIDTH}) / 2);
  }

  @media (max-width: ${BP.mobile}) {
    padding: 0 16px;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  gap: 6px;
  height: 44px;
  max-width: 254px;
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

const ImageWrapper = styled.div`
  width: 22px;
`;
