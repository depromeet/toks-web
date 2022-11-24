import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { ComponentProps, ReactNode } from 'react';

type AvatarSize = 'normal' | 'large' | 'xlarge';

interface ImageAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
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
export function UserAvatar(avatarInfo: ImageAvatarProps | LabelAvatarProps) {
  return (
    <StyledAvatar
      image={avatarInfo.image}
      label={avatarInfo.label}
      size={avatarInfo.size}
      shape="circle"
      // TODO: inline style로 적용한 부분 제외하기...^^ (현구님 따라해서 일단 저도 이렇게 했슴다..)
      style={{
        width: AVATAR_SIZE[avatarInfo.size ?? "normal"],
        height: AVATAR_SIZE[avatarInfo.size ?? "normal"],
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

// const makeAvatars = (avatarInfos: ImageAvatarProps[]) =>
//   avatarInfos.map(avatarInfo => (
//     <UserAvatar image={avatarInfo.image} userName={avatarInfo.userName} size={avatarInfo.size} />
//   ));

// const makeAvatarGroupLabel = (avatarInfos: ImageAvatarProps[]) =>
//   avatarInfos.length !== 0 ? (
//     <UserAvatar
//       label={`+${avatarInfos.length}`}
//       userNames={avatarInfos.map(avartarInfo => avartarInfo.userName)}
//       size={'large'}
//     />
//   ) : null;

// const makeAvatarGroup = (avatarInfos: ImageAvatarProps[]) => [
//   ...makeAvatars(avatarInfos.slice(0, 6)),
//   makeAvatarGroupLabel(avatarInfos.slice(6)),
// ];

interface RowProps {
  view?: number;
  children: ReactNode | ReactNode[];
}

function Group({ view = 6, children }: RowProps) {
  return (
    <AvatarGroup>
      {children.slice(0, view)}
    </AvatarGroup>
  );
}

UserAvatar.Group = Group;
