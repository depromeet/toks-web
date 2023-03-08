import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Image as ImageComponent, Text, Tooltip, imageUrl } from '@depromeet/toks-components';

import { AvatarGroup } from './AvatarGroup';
import { AVATAR_SIZE } from './constants';

export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  tooltipStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  src?: string;
  isVisibleTooltip?: boolean;
  tooltipContent?: string;
  size?: AvatarSize;
  alt?: string;
  count?: number;
}

export function Avatar({
  src = imageUrl.baseToks,
  isVisibleTooltip = false,
  tooltipContent,
  size = 'small',
  wrapperStyle,
  tooltipStyle,
  alt = '',
  count,
  ...rest
}: AvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src ?? 'baseImage';

    image.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <>
      {tooltipContent ? (
        <Tooltip message={tooltipContent} direction="bottom" isVisibleTooltip={isVisibleTooltip} style={tooltipStyle}>
          <StyledAvatar size={size} style={wrapperStyle} {...rest}>
            {count ? (
              <Text color="gray030">{`+${count}`}</Text>
            ) : (
              <ImageComponent
                block
                width={AVATAR_SIZE[size]}
                height={AVATAR_SIZE[size]}
                src={src}
                style={{
                  opacity: isLoaded ? 1 : 0,
                }}
                alt={alt}
              />
            )}
          </StyledAvatar>
        </Tooltip>
      ) : (
        <StyledAvatar size={size} style={wrapperStyle} {...rest}>
          <ImageComponent
            block
            width={AVATAR_SIZE[size]}
            height={AVATAR_SIZE[size]}
            src={src}
            style={{
              opacity: isLoaded ? 1 : 0,
            }}
            alt={alt}
          />
        </StyledAvatar>
      )}
    </>
  );
}

export const StyledAvatar = styled('div')<{ size: AvatarSize }>`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${theme.colors.gray100};
  background-color: #8e8e8e;
  text-align: center;
  vertical-align: middle;
  line-height: 42px;

  > img {
    transition: opacity 0.3s ease-out;
  }

  ${({ size }) => {
    return css`
      width: ${AVATAR_SIZE[size]}px;
      height: ${AVATAR_SIZE[size]}px;
    `;
  }}
`;

Avatar.Group = AvatarGroup;
