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

export const Icon = ({ color, size = 28, width, height, iconName, wrapperProps, ...rest }: IconProps) => {
  const IconComponent = ICONS[iconName];

  return (
    <StyledIcon {...wrapperProps} color={color}>
      <IconComponent {...rest} width={width || size} height={height || size} />
    </StyledIcon>
  );
};

// TODO: svg파일의 색깔이 fill아니면 stroke으로 칠해져 있는게 있어서 둘 다 지원 필요
const StyledIcon = styled.i<{ color?: KeyOfColors }>`
  & > svg,
  & path {
    stroke: ${({ color }) => color && theme.colors[color]};
  }
  display: inline-flex;
  align-items: center;
`;
