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
  tooltip?: boolean;
}

interface LabelAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'label' | 'size'> {
  label?: string;
  userNames?: string[];
  size?: AvatarSize;
  tooltip?: boolean;
}

const AVATAR_SIZE = {
  normal: '22px',
  large: '32px',
  xlarge: '40px',
};

export function UserAvatar({
  image,
  label,
  userName,
  userNames = [],
  size,
  className,
  tooltip = false,
}: ImageAvatarProps & LabelAvatarProps) {
  const tooltipContent = userName ?? userNames.join(', ');
  const isBaseProfileImage =
    image === 'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg';
  const baseProfileImage = 'https://toks-web-assets.s3.amazonaws.com/toks-emoji/ic-base-profile.png'; //"https://asset.tokstudy.com/toks-emoji/ic-base-profile.png";

  return (
    <>
      {tooltip && <Tooltip target={`.${className}`} content={tooltipContent} position="bottom" />}
      <StyledAvatar
        image={isBaseProfileImage ? baseProfileImage : image}
        label={label}
        size={size}
        shape="circle"
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
      tooltip={true}
    />
  ) : null;

const getUserNamesOfAvatars = (userAvatars: ReactJSXElement[]) =>
  userAvatars.map(userAvatar => userAvatar.props.userName);

type GroupType = 'study' | 'quiz';

interface GroupProps extends ComponentProps<typeof AvatarGroup> {
  view?: number;
  id: string;
  groupType: GroupType;
  children: ReactNode;
}

function Group({ view = 6, id, groupType, children, ...rest }: GroupProps) {
  const userAvatars = Children.toArray(children) as ReactElement[];
  const groupClassName = `avatar--${groupType}_${id}`;
  return (
    <AvatarGroup {...rest}>
      {[...userAvatars.slice(0, view), makeAvatarGroupLabel(groupClassName, view, userAvatars.slice(view))]}
    </AvatarGroup>
  );
}

UserAvatar.Group = Group;
