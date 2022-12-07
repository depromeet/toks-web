import { KeyOfColors, theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: KeyOfColors;
  width?: number;
  height?: number;
}

export const SvgIcon = ({ color, size = 24, width, height, icon: IconComponent, wrapperProps, ...rest }: IconProps) => {
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
