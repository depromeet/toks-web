import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Tag as BaseTag } from 'primereact/tag';
import { ComponentProps } from 'react';

interface Props extends Omit<ComponentProps<typeof BaseTag>, 'color'> {
  color?: 'highlight' | 'normal';
}

export function Tag({ color = 'normal', ...restProps }: Props) {
  return (
    <StyledTag
      // TODO: inline style로 적용한 부분 제외하기
      style={{
        background: color === 'highlight' ? 'rgba(255, 134, 47, 0.2)' : theme.colors.gray080,
        color: color === 'highlight' ? theme.colors.primary : theme.colors.gray020,
        padding: '4px 12px',
        width: '86px',
        height: '28px',
        borderRadius: ' 8px',
      }}
      {...restProps}
    />
  );
}

const StyledTag = styled(BaseTag)`
  .p-tag-value {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;
