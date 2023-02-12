import { KeyOfColors, theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
// import { Tag as BaseTag } from 'primereact/tag';
import { HTMLAttributes, ReactNode } from 'react';
import { Text } from '../Text';

type TagColor = 'highlight' | 'normal'

type TagColorMap = {
  [key in TagColor]: {
    background: string,
    color: KeyOfColors
  };
};

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  value: string;
  color?: TagColor;
}

const TAG_COLOR : TagColorMap = {
  normal : {
    background : theme.colors.gray080,
    color : 'gray020'
  },
  highlight : {
    background : theme.colors.primary_opacity,
    color : 'primary'
  }
}

export function Tag({ value, color = 'normal', ...restProps }: TagProps) {
  return (
    <StyledTag
      color={color}
      role="listitem"
      {...restProps}
    >
      <Text variant='body02' color={TAG_COLOR[color].color}>{value}</Text>
    </StyledTag>
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

const StyledTag = styled.span<{color : TagColor}>`
  padding: '4px 12px';
  width: '200px';
  height: '28px';
  border-radius: '8px';
  white-space: 'nowrap';
  letter-spacing: ' -0.6px';
  text-align: 'left';
  ${({color}) => css`
    background: ${TAG_COLOR[color].background};
    color: ${TAG_COLOR[color].color};
  `}
`

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
