import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Tooltip as BaseTooltip } from 'primereact/tooltip';
import { ComponentProps } from 'react';

type PositionType = 'top' | 'bottom' | 'right' | 'left';

interface TooltipProps extends Omit<ComponentProps<typeof BaseTooltip>, 'target' | 'content' | 'position'> {
  target: string;
  content: string;
  position: PositionType;
}

const isBottom = (position: PositionType) => position === 'bottom';

/*
TODO:
- 툴팁 화살표 길이 늘어나게 구현해야함
- 툴팁 방향에 따라 스타일 적용이 다른 부분에 대해서 중복성을 줄여야 함 
*/
export function Tooltip({ target, content, position }: TooltipProps) {
  return isBottom(position) ? (
    <StyledBottomTooltip
      // TODO: inline style로 적용한 부분 제외하기
      target={target}
      content={content}
      position={position}
    />
  ) : (
    <StyledRightTooltip target={target} content={content} position={position} />
  );
}

const StyledBottomTooltip = styled(BaseTooltip)<{ position: PositionType }>`
  text-align: center;
  margin-top: 4px;
  color: ${theme.colors.gray120} !important;

  .p-tooltip {
  }
  .p-tooltip-text {
    font-size: 14px;
    color: ${theme.colors.gray120} !important;
    background: ${theme.colors.white} !important;
    padding: 4px 16px !important;
    border-radius: 8px !important;
  }

  .p-tooltip-arrow {
    border-bottom-color: ${theme.colors.white} !important;
  }
`;

const StyledRightTooltip = styled(BaseTooltip)<{ position: PositionType }>`
  text-align: center;
  margin-left: 4px;
  color: ${theme.colors.gray120} !important;

  .p-tooltip {
  }
  .p-tooltip-text {
    font-size: 14px;
    color: ${theme.colors.gray120} !important;
    background: ${theme.colors.white} !important;
    padding: 4px 16px !important;
    border-radius: 8px !important;
  }

  .p-tooltip-arrow {
    border-right-color: ${theme.colors.white} !important;
  }
`;
