import { theme } from '@depromeet/theme';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Children, ComponentProps, ReactElement, ReactNode } from 'react';

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
    />
  );
}

const StyledAvatar = styled(BaseAvatar)`
  .p-avatar-text {
    font-size: 14px;
  }
`;

const makeAvatarGroupLabel = (userAvatars :  ReactElement[]) =>
  userAvatars.length !== 0 ? (
    <UserAvatar
      label={`+${userAvatars.length}`}
      userNames={getUserNamesOfAvatars(userAvatars)}
      size={'large'}
    />
  ) : null;

const getUserNamesOfAvatars = (userAvatars : ReactJSXElement[]) => 
  userAvatars.map(userAvatar => userAvatar.props.userName);

interface RowProps {
  view?: number;
  children: ReactNode;
}

function Group({ view = 6, children }: RowProps) {
  const userAvatars = Children.toArray(children);
  return (
    <AvatarGroup>
      {
        [
          ...userAvatars.slice(0, view),
          makeAvatarGroupLabel(userAvatars.slice(view) as ReactElement[])
        ]
      }
    </AvatarGroup>
  );
}

UserAvatar.Group = Group;
