import { KeyOfColors, theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import React from 'react';

import { ICONS, IconName } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iconName: IconName;
  size?: number;
  color?: KeyOfColors;
  width?: number;
  height?: number;
}

export const Icon = ({ color, size = 24, width, height, iconName, wrapperProps, ...rest }: IconProps) => {
  const IconComponent = ICONS[iconName];

  return (
    <StyledIcon {...wrapperProps} color={color}>
      <IconComponent {...rest} width={width || size} height={height || 'auto'} />
    </StyledIcon>
  );
};

const StyledIcon = styled.i<{ color?: KeyOfColors }>`
  & > svg,
  & path {
    fill: ${({ color }) => color && theme.colors[color]};
  }
  display: inline-block;
`;
