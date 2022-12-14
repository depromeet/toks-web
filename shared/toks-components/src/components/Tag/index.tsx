import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Tag as BaseTag } from 'primereact/tag';
import { ComponentProps, HTMLAttributes, ReactNode } from 'react';

interface TagProps extends Omit<ComponentProps<typeof BaseTag>, 'color'> {
  color?: 'highlight' | 'normal';
}

export function Tag({ color = 'normal', ...restProps }: TagProps) {
  return (
    <BaseTag
      // TODO: inline style로 적용한 부분 제외하기
      style={{
        background: color === 'highlight' ? 'rgba(255, 134, 47, 0.2)' : theme.colors.gray080,
        color: color === 'highlight' ? theme.colors.primary : theme.colors.gray020,
        padding: '4px 12px',
        width: 'fit-content',
        height: '28px',
        borderRadius: '8px',
        whiteSpace: 'nowrap',
        fontFamily: 'Spoqa Han Sans Neo',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: ' -0.6px',
        textAlign: 'left',
      }}
      role="listitem"
      {...restProps}
    />
  );
}

interface RowProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

// TODO: maxView 개수 받도록
function Row({ children, ...props }: RowProps) {
  return <ListRow {...props}>{children}</ListRow>;
}

Tag.Row = Row;

const ListRow = styled.ul`
  display: flex;
  gap: 8px;
  overflow: auto;
  padding: 0;
  height: 28px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '.';
    visibility: hidden;
  }
`;
