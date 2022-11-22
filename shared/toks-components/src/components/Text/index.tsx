import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

import { Typography, typography as typographyObject } from './token';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  // as?: 'span' | 'strong' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // TODO: as 통해서 시멘틱 태그 사용 가능하게
  size?: number;
  weight?: FontWeight;
  color?: string; // TODO: color token type 추가
  variant?: Typography;
  children: ReactNode;
}

// TODO: 폰트 토큰 정해지면 수정하기
export function Text({
  size = 16,
  weight = 'normal',
  color = theme.colors.white,
  children,
  variant = 'body02',
  ...rest
}: TextProps) {
  return (
    <StyledText size={size} weight={weight} color={color} variant={variant} {...rest}>
      {children}
    </StyledText>
  );
}

type StyleProps = Pick<TextProps, 'size' | 'weight' | 'color' | 'variant'>;

const StyledText = styled('span')<StyleProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: -0.6px;
  line-height: 100%;

  ${({ variant }) => typographyObject[variant ?? 'body02']}
`;
