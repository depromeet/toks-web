import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { match } from 'ts-pattern';
import { TOKS_HEADER_HEIGHT } from '../../constants';

import { Icon } from '../Icon';
import { Text } from '../Text';

const VERTICAL = ['top', 'bottom'] as const;
const HORIZONTAL = ['left', 'right'] as const;

type VerticalDirection = typeof VERTICAL[number];
type HorizontalDirection = typeof HORIZONTAL[number];

type Direction = VerticalDirection | HorizontalDirection;

interface Props {
  type: 'danger' | 'success';
  title: string;
  onClick?: () => void;
  direction?: Direction | [HorizontalDirection, VerticalDirection];
  icon?: ReactNode;
}

/**
 *
 * @param direction left, right, [right, top] ...
 *
 * 기본적으로 가운데 정렬입니다.
 * ['right', 'top'] 처럼 설정 시, 오른쪽 위에 뜨게됩니다.
 *
 */
export function Toast({ type, icon, title, onClick, direction = 'top' }: Props) {
  return (
    <StyledToast direction={direction} onClick={onClick}>
      {icon ??
        match(type)
          .with('danger', () => <DangerIcon />)
          .with('success', () => <SuccessIcon />)
          .exhaustive()}

      <Text variant="subhead" color="gray090">
        {title}
      </Text>
    </StyledToast>
  );
}

// TODO 아이콘 컴포넌트 완성되면 수정
function DangerIcon() {
  return <Icon size={28} iconName="ic-failed" />;
}

function SuccessIcon() {
  return <Icon size={28} iconName="ic-success" />;
}

/**
 * 화면의 가장자리에서 얼마나 떨어질지에 대한 값
 */
const EDGE_PADDING = TOKS_HEADER_HEIGHT;

const HorizontalCenterCss = css`
  left: 50%;
  transform: translate(-50%, 0);
`;

const VerticalCenterCss = css`
  top: 50%;
  transform: translate(0, -50%);
`;

const StyledToast = styled.div<{ direction: Props['direction'] }>`
  position: fixed;

  ${({ direction }) =>
    match(direction)
      .when(
        direction => !Array.isArray(direction),
        (direction: Direction) =>
          // 상하좌우 가운데 정렬
          css`
            ${direction}:${EDGE_PADDING};
            // Type Error로 includes 사용 불가
            ${VERTICAL.some(verticalDirection => verticalDirection === direction)
              ? HorizontalCenterCss
              : VerticalCenterCss}
          `
      )
      .when(
        direction => Array.isArray(direction),
        (directions: [HorizontalDirection, VerticalDirection]) =>
          // 왼쪽위 / 오른쪽아래 등등 조합한 정렬
          directions.map(
            direction =>
              css`
                ${direction}:${EDGE_PADDING};
              `
          )
      )
      .otherwise(
        () =>
          // 기본은 가운데 상단 정렬
          css`
            top: ${EDGE_PADDING};
            ${HorizontalCenterCss}
          `
      )}

  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 16px;
  padding: 12px 26px 12px 24px;
  border: 1px solid ${theme.colors.gray020};
  background-color: ${theme.colors.gray010};

  z-index: 99999;

  ${theme.shadows.book01}
`;
