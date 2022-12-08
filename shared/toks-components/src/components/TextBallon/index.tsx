import { KeyOfColors, theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Text } from '../Text';

// 다른 방향도 필요하면 추가.
type Direction = 'top';

interface Props {
  title: string;
  direction?: Direction;
  onClick?: () => void;
  className?: string;
  color?: KeyOfColors;
}

/**
 * @Note 아직 현재 필요한 기능만 구현한 상태입니다. 추가적인 디자인이 나오면, 추가 개발이 필요합니다.
 */
export function TextBallon({ title, onClick, className, direction = 'top', color = 'primary' }: Props) {
  return (
    <StyledBallon onClick={onClick} direction={direction} className={className} color={color}>
      <Text variant="body02" color="gray010" style={{ fontWeight: 700 }}>
        {title}
      </Text>
    </StyledBallon>
  );
}

export default TextBallon;

const StyledBallon = styled.div<{ direction: Direction; color: KeyOfColors }>`
  position: absolute;
  width: 80%;
  min-width: 220px;
  height: 36px;
  left: 50%;
  transform: translate(-50%, -150%);
  background: ${({ color }) => theme.colors[color]};
  color: ${theme.colors.gray010};
  border-radius: 32px;
  padding: 8px 20px;
  text-align: center;

  &:after {
    border-top: 10px solid ${theme.colors.primary};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &:hover {
    cursor: pointer;
  }
`;
