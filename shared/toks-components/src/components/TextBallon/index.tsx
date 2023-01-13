import { KeyOfColors, theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { Text } from '../Text';

// 다른 방향도 필요하면 추가.
type Direction = 'top' | 'bottom';

interface Props {
  title: string;
  width?: number;
  direction?: Direction;
  onClick?: () => void;
  className?: string;
  color?: KeyOfColors;
}

/**
 * @Note 아직 현재 필요한 기능만 구현한 상태입니다. 추가적인 디자인이 나오면, 추가 개발이 필요합니다.
 */
export function TextBallon({ title, onClick, className, direction = 'top', color = 'primary_opacity', width }: Props) {
  return (
    <StyledBallon onClick={onClick} direction={direction} className={className} color={color} style={{ width }}>
      <Text variant="body02" color="gray010" style={{ fontWeight: 700 }}>
        {title}
      </Text>
    </StyledBallon>
  );
}

export default TextBallon;

const VALUE_BY_DIRECTION = {
  top: {
    translateY: '-150%',
    arrowBorderTop: `10px solid ${theme.colors.primary}`,
    arrowBorderBottom: `0px solid transparent`,
    afterTop: '32px',
  },
  bottom: {
    translateY: '0%',
    arrowBorderTop: '0px solid transparent',
    arrowBorderBottom: `10px solid ${theme.colors.primary}`,
    afterTop: '-5px',
  },
};

const StyledBallon = styled.div<{ direction: Direction; color: KeyOfColors }>`
  position: absolute;
  width: 80%;
  min-width: 220px;
  height: 36px;
  left: 50%;
  transform: ${({ direction }) => `translate(-50%, ${VALUE_BY_DIRECTION[direction].translateY})`};
  background: ${({ color }) => theme.colors[color]};
  color: ${theme.colors.gray010};
  border-radius: 32px;
  padding: 8px 20px;
  text-align: center;

  &:after {
    border-top: ${({ direction }) => VALUE_BY_DIRECTION[direction].arrowBorderTop};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: ${({ direction }) => VALUE_BY_DIRECTION[direction].arrowBorderBottom};
    content: '';
    position: absolute;
    top: ${({ direction }) => VALUE_BY_DIRECTION[direction].afterTop};
    left: 50%;
    transform: translate(-50%, 0%);
  }

  &:hover {
    cursor: pointer;
  }
`;
