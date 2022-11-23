import styled from '@emotion/styled';
import { theme } from '@depromeet/theme';
import { Avatar as BaseAvatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { ComponentProps, ReactNode } from 'react';

type AvatarSize = 'normal' | 'large' | 'xlarge';

interface AvatarProps extends Omit<ComponentProps<typeof BaseAvatar>, 'image' | 'size'> {
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
  xlarge: '40px'
};

export function Avatar({image, userName, size="normal"} : AvatarProps) {
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
        border: `1px solid ${theme.colors.gray100}`
      }}
    >
    </StyledAvatar>
  );
}

const StyledAvatar = styled(BaseAvatar)`
   .p-avatar-text {
     font-size: 14px;
   }
`;

interface RowProps{
  children: ReactNode;
}

// TODO: maxView 개수 받도록
function Group({ children }: RowProps) {
  return <AvatarGroup>{children}</AvatarGroup>;
}

// TODO: Avatar와 중복되는 요소들을 어떻게 합칠지 고민해봐야 함
function Label({label, userNames, size="normal"} : LabelAvatarProps) {
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
        border: `1px solid ${theme.colors.gray100}`
      }}
    >
    </StyledAvatar>
  );
}

Avatar.Group = Group;
Avatar.Label = Label;
