import { theme } from '@depromeet/theme';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Children, ComponentProps, ReactElement, ReactNode, HTMLAttributes } from 'react';

import { Tooltip } from '@depromeet/toks-components';

type AvatarSize = 'normal' | 'large' | 'xlarge';

interface ImageAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
  image?: string;
  id: string;
  userName?: string;
  size?: AvatarSize;
}

interface LabelAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'label' | 'size'> {
  label?: string;
  id: string;
  userNames?: string[];
  size?: AvatarSize;
}

const AVATAR_SIZE = {
  normal: '22px',
  large: '32px',
  xlarge: '40px',
};

// const isImageAvatar = (image : string) => ima !== undefined;

// TODO : 디폴트 이미지가 직접 넘어오는지 빈 값으로 넘어오는지에 따라 디폴트 프로필 이미지 출력을 구현해야함
export function UserAvatar({image, label, id, userName, userNames = [], size , ...rest}: ImageAvatarProps & LabelAvatarProps) {
  const tooltipContent = userName ?? userNames.join(', ');
  const avatarClassName = (image) ? `avatar--user_${id}` : `avatar--group_${id}`;

  return (
    <>
      <Tooltip target={`.${avatarClassName}`} content={tooltipContent} position="bottom" />
      <StyledAvatar
        className={avatarClassName}
        image={image}
        label={label}
        size={size}
        shape="circle"
        // TODO: inline style로 적용한 부분 제외하기...^^ (현구님 따라해서 일단 저도 이렇게 했슴다..)
        style={{
          width: AVATAR_SIZE[size ?? 'normal'],
          height: AVATAR_SIZE[size ?? 'normal'],
          backgroundColor: `${theme.colors.gray060}`,
          border: `1px solid ${theme.colors.gray100}`,
        }}
        {...rest}
      />
    </>
  );
}

const StyledAvatar = styled(BaseAvatar)`
  .p-avatar-text {
    font-size: 14px;
  }
`;

const makeAvatarGroupLabel = (id: string, userAvatars: ReactElement[]) =>
  userAvatars.length !== 0 ? (
    <UserAvatar
      label={`+${userAvatars.length}`}
      id={id}
      userNames={getUserNamesOfAvatars(userAvatars)}
      size={'large'}
    />
  ) : null;

const getUserNamesOfAvatars = (userAvatars: ReactJSXElement[]) =>
  userAvatars.map(userAvatar => userAvatar.props.userName);

interface GroupProps extends ComponentProps<typeof AvatarGroup> {
  view?: number;
  id: string;
  children: ReactNode;
}

function Group({ view = 6, id, children, ...rest }: GroupProps) {
  const userAvatars = Children.toArray(children) as ReactElement[];
  return (
    <AvatarGroup {...rest}>{[...userAvatars.slice(0, view), makeAvatarGroupLabel(id, userAvatars.slice(view))]}</AvatarGroup>
  );
}

UserAvatar.Group = Group;
