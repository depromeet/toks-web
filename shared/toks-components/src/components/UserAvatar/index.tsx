import { theme } from '@depromeet/theme';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Children, ComponentProps, ReactElement, ReactNode } from 'react';

import { Tooltip } from '@depromeet/toks-components';

type AvatarSize = 'normal' | 'large' | 'xlarge';

interface ImageAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
  image?: string;
  userName?: string;
  size?: AvatarSize;
}

interface LabelAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'label' | 'size'> {
  label?: string;
  userNames?: string[];
  size?: AvatarSize;
}

const AVATAR_SIZE = {
  normal: '22px',
  large: '32px',
  xlarge: '40px',
};

// TODO : 디폴트 이미지가 직접 넘어오는지 빈 값으로 넘어오는지에 따라 디폴트 프로필 이미지 출력을 구현해야함
export function UserAvatar({
  image,
  label,
  userName,
  userNames = [],
  size,
  className,
}: ImageAvatarProps & LabelAvatarProps) {
  const tooltipContent = userName ?? userNames.join(', ');
  // const avatarClassName = image ? `avatar--user_${id}` : `avatar--group_${id}`;

  return (
    <>
      <Tooltip target={`.${className}`} content={tooltipContent} position="bottom" />
      <StyledAvatar
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
        className={className}
      />
    </>
  );
}

const StyledAvatar = styled(BaseAvatar)`
  .p-avatar-text {
    font-size: 14px;
  }
`;

const makeAvatarGroupLabel = (className: string, labelKey: number, userAvatars: ReactElement[]) =>
  userAvatars.length !== 0 ? (
    <UserAvatar
      key={labelKey}
      label={`+${userAvatars.length}`}
      userNames={getUserNamesOfAvatars(userAvatars)}
      size={'large'}
      className={className}
    />
  ) : null;

const getUserNamesOfAvatars = (userAvatars: ReactJSXElement[]) =>
  userAvatars.map(userAvatar => userAvatar.props.userName);

type GroupType = 'study' | 'quiz';

interface GroupProps extends ComponentProps<typeof AvatarGroup> {
  view?: number;
  id: string;
  children: ReactNode;
  groupType: GroupType;
}

function Group({ view = 6, id, children, groupType, ...rest }: GroupProps) {
  const userAvatars = Children.toArray(children) as ReactElement[];
  const groupClassName = `avatar--${groupType}_${id}`;
  return (
    <AvatarGroup {...rest}>
      {[...userAvatars.slice(0, view), makeAvatarGroupLabel(groupClassName, view, userAvatars.slice(view))]}
    </AvatarGroup>
  );
}

UserAvatar.Group = Group;
