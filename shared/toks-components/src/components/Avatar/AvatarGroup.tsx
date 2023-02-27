import { Children, PropsWithChildren, cloneElement, isValidElement } from 'react';

import { Avatar, AvatarProps } from '.';
import { AVATAR_GROUP_GAP } from './constants';

export interface AvatarGroupProps {
  children: React.ReactNode;
  viewCount?: number;
  size?: AvatarProps['size'];
}

export const AvatarGroup = ({ children, viewCount = 2, size = 'large' }: AvatarGroupProps) => {
  const avatars = Children.toArray(children)
    .filter(element => {
      if (isValidElement(element) && element.type === Avatar) {
        return true;
      }
      return false;
    })
    .map((component, index, avatars) => {
      const avatar = component as React.ReactElement<PropsWithChildren<AvatarProps>>;

      return cloneElement(avatar, {
        ...avatar.props,
        size,
        wrapperStyle: {
          ...avatar.props.wrapperStyle,
          zIndex: avatars.length + index,
        },
        tooltipStyle: {
          left: -AVATAR_GROUP_GAP * index,
        },
        isVisibleTooltip: true,
      });
    });

  const viewAvatars = avatars.slice(0, viewCount);

  const noneViewAvatarNames = avatars
    .slice(viewCount)
    .map(avatar => avatar.props.tooltipContent)
    .join(', ');

  const avatarsLength = avatars.length > viewCount ? avatars.length - viewCount : undefined;

  return (
    <div>
      {viewAvatars.concat(
        avatarsLength ? (
          <Avatar
            count={avatarsLength}
            size={size}
            isVisibleTooltip
            tooltipContent={noneViewAvatarNames}
            wrapperStyle={{
              zIndex: avatars.length + viewCount,
            }}
            tooltipStyle={{
              left: -AVATAR_GROUP_GAP * viewCount,
            }}
          />
        ) : (
          []
        )
      )}
    </div>
  );
};
