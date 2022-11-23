import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { ComponentProps } from 'react';

type AvatarSize = 'normal' | 'large' | 'xlarge';

export interface AvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
  image: string;
  userName: string;
  size?: AvatarSize;
}

interface LabelAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'label' | 'size'> {
  label: string;
  userNames: string[];
  size?: AvatarSize;
}

const AVATAR_SIZE = {
  normal: '22px',
  large: '32px',
  xlarge: '40px',
};

// TODO : 디폴트 이미지가 직접 넘어오는지 빈 값으로 넘어오는지에 따라 디폴트 프로필 이미지 출력을 구현해야함
export function Avatar({ image, userName, size = 'normal' }: AvatarProps) {
  userName; // tooltip 때문에 일단 받아놓기 위한....일단 사용은 해야해서...
  return (
    <StyledAvatar
      image={image}
      size={size}
      shape="circle"
      // TODO: inline style로 적용한 부분 제외하기...^^ (현구님 따라해서 일단 저도 이렇게 했슴다..)
      style={{
        width: AVATAR_SIZE[size],
        height: AVATAR_SIZE[size],
        border: `1px solid ${theme.colors.gray100}`,
      }}
    ></StyledAvatar>
  );
}

const StyledAvatar = styled(BaseAvatar)`
  .p-avatar-text {
    font-size: 14px;
  }
`;

const makeAvatars = (avatarInfos: AvatarProps[]) =>
  avatarInfos.map(avatarInfo => (
    <Avatar image={avatarInfo.image} userName={avatarInfo.userName} size={avatarInfo.size} />
  ));

const makeAvatarLabel = (avatarInfos: AvatarProps[]) =>
  avatarInfos.length !== 0 ? (
    <Avatar.Label
      label={`+${avatarInfos.length}`}
      userNames={avatarInfos.map(avartarInfo => avartarInfo.userName)}
      size={'large'}
    />
  ) : null;

const makeAvatarGroup = (avatarInfos: AvatarProps[]) => [
  ...makeAvatars(avatarInfos.slice(0, 6)),
  makeAvatarLabel(avatarInfos.slice(6)),
];

interface RowProps {
  avatarInfos: AvatarProps[];
}

// TODO: maxView 개수 받도록
function Group({ avatarInfos }: RowProps) {
  return <AvatarGroup>{makeAvatarGroup(avatarInfos)}</AvatarGroup>;
}

// TODO: Avatar와 중복되는 요소들을 어떻게 합칠지 고민해봐야 함
function Label({ label, userNames, size = 'normal' }: LabelAvatarProps) {
  userNames;
  return (
    <StyledAvatar
      label={label}
      size={size}
      shape="circle"
      style={{
        width: AVATAR_SIZE[size],
        height: AVATAR_SIZE[size],
        backgroundColor: `${theme.colors.gray060}`,
        border: `1px solid ${theme.colors.gray100}`,
      }}
    ></StyledAvatar>
  );
}

Avatar.Group = Group;
Avatar.Label = Label;
