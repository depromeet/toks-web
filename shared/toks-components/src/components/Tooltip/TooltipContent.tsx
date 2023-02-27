import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { DirectionType, PositionType, isBottom } from '.';
import { Text } from '../Text';

export const TooltipContent = ({
  message,
  direction,
  position,
}: {
  message: string;
  direction: DirectionType;
  position: PositionType;
}) => {
  return (
    <StyledTooltipContent
      direction={direction}
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <Text color="gray110" variant="body02">
        {message}
      </Text>
    </StyledTooltipContent>
  );
};

const StyledTooltipContent = styled('div')<{ direction: DirectionType }>`
  &:before {
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    ${({ direction }) => {
      if (isBottom(direction)) {
        return css`
          border-width: 0 5px 10px 5px;
          border-color: transparent transparent #efefef transparent;
          left: 50%;
          margin-left: -5px;
          top: -10px;
        `;
      }
      return css`
        border-width: 5px 10px 5px 0px;
        border-color: transparent #efefef transparent transparent;
        top: 50%;
        margin-top: -5px;
        right: -10px;
      `;
    }};
    content: '';
  }

  ${({ direction }) => {
    if (isBottom(direction)) {
      return css`
        transform: translateX(-50%);
      `;
    }
    return '';
  }}

  background-color: #efefef;
  padding: 4px 16px;
  position: absolute;
  z-index: 9999;
  border-radius: 9px;
`;
