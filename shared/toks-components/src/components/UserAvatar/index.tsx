import { theme } from '@depromeet/theme';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Tooltip } from 'primereact/tooltip';
import { Children, ComponentProps, ReactElement, ReactNode } from 'react';

type AvatarSize = 'normal' | 'large' | 'xlarge';

interface ImageAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
  image: string;
  id: string;
  userName: string;
  size?: AvatarSize;
}

interface LabelAvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'label' | 'size'> {
  label: string;
  id: string;
  userNames: string[];
  size?: AvatarSize;
}

const AVATAR_SIZE = {
  normal: '22px',
  large: '32px',
  xlarge: '40px',
};

const isImageAvatar = (props: any): props is ImageAvatarProps => 
  props.userName !== undefined;

// TODO : 디폴트 이미지가 직접 넘어오는지 빈 값으로 넘어오는지에 따라 디폴트 프로필 이미지 출력을 구현해야함
export function UserAvatar(props: ImageAvatarProps | LabelAvatarProps) {
  const tooltipContent = isImageAvatar(props)? props.userName : props.userNames.join(', ');
  const avatarId = isImageAvatar(props)? `user_${props.id}` : `group_${props.id}`;
  
  return (<>
    <Tooltip 
      target={`#${avatarId}`}
      content={tooltipContent}
      position='bottom'
      style={{
      }}/>
    <StyledAvatar
      id={avatarId}
      image={props.image}
      label={props.label}
      size={props.size}
      shape="circle"
      // TODO: inline style로 적용한 부분 제외하기...^^ (현구님 따라해서 일단 저도 이렇게 했슴다..)
      style={{
        width: AVATAR_SIZE[props.size ?? "normal"],
        height: AVATAR_SIZE[props.size ?? "normal"],
        backgroundColor: `${theme.colors.gray060}`,
        border: `1px solid ${theme.colors.gray100}`,
      }}
    />
    </>
  );
}

const StyledAvatar = styled(BaseAvatar)`
  .p-avatar-text {
    font-size: 14px;
  }
`;

const makeAvatarGroupLabel = (id: string, userAvatars :  ReactElement[], ) =>
  userAvatars.length !== 0 ? (
    <UserAvatar
      label={`+${userAvatars.length}`}
      id={id}
      userNames={getUserNamesOfAvatars(userAvatars)}
      size={'large'}
    />
  ) : null;

const getUserNamesOfAvatars = (userAvatars : ReactJSXElement[]) => 
  userAvatars.map(userAvatar => userAvatar.props.userName);

interface GroupProps {
  view?: number;
  id: string;
  children: ReactNode;
}

function Group({ view = 6, id, children }: GroupProps) {
  const userAvatars = Children.toArray(children) as ReactElement[];
  return (
    <AvatarGroup>
      {
        [
          ...userAvatars.slice(0, view),
          makeAvatarGroupLabel(id, userAvatars.slice(view))
        ]
      }
    </AvatarGroup>
  );
}

UserAvatar.Group = Group;
