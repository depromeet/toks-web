import { KeyOfColors, theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Children, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { Text } from '../Text';

type TagColor = 'highlight' | 'normal';

type TagColorMap = {
  [key in TagColor]: {
    background: string;
    color: KeyOfColors;
  };
};

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  value: string;
  color?: TagColor;
}

const TAG_COLOR: TagColorMap = {
  normal: {
    background: theme.colors.gray080,
    color: 'gray020',
  },
  highlight: {
    background: theme.colors.primary_opacity,
    color: 'primary',
  },
};

const StyledTag = styled.span<{ color: TagColor }>`
  /* TODO : 이걸 살려서 적용이 되게 변경해야 함.
  padding: '4px 12px';
  width: 'fit-content';
  height: '28px';
  border-radius: '8px';
  white-space: 'nowrap';
  letter-spacing: ' -0.6px';
  text-align: 'left';
  */
  ${({ color }) => css`
    background: ${TAG_COLOR[color].background};
    color: ${TAG_COLOR[color].color};
  `}
`;

export function Tag({ value, color = 'normal', ...restProps }: TagProps) {
  return (
    <StyledTag
      color={color}
      role="listitem"
      style={{
        padding: '4px 12px',
        width: 'fit-content',
        borderRadius: '8px',
        whiteSpace: 'nowrap',
      }}
      {...restProps}
    >
      <Text variant="body02" color={TAG_COLOR[color].color}>
        {value}
      </Text>
    </StyledTag>
  );
}

interface RowProps extends HTMLAttributes<HTMLUListElement> {
  maxView?: number;
  children: ReactNode;
}

// TODO: maxView 개수 받도록
function Row({ children, maxView, ...props }: RowProps) {
  const tags = Children.toArray(children) as ReactElement[];
  return <ListRow {...props}>{maxView ? tags.slice(0, maxView) : tags}</ListRow>;
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
