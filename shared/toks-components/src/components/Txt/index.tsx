import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'bolder' | 'lighter';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
  weight?: FontWeight;
  color?: string;
  children: ReactNode;
}

// TODO: 폰트 토큰 정해지면 수정하기
export function Txt({ size = 16, weight = 'normal', color = theme.colors.white, children, ...rest }: Props) {
  return (
    <StyledTxt size={size} weight={weight} color={color} {...rest}>
      {children}
    </StyledTxt>
  );
}

type StyleProps = Pick<Props, 'size' | 'weight' | 'color'>;

const StyledTxt = styled.span<StyleProps>`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: -0.6px;
  line-height: 100%;
`;
