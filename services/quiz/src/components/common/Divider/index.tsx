import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

export const Line = styled.div`
    height: 1px;
    background-color: ${theme.colors.gray080};
`

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    width?: number | undefined;
}

export function Divider({width, ...rest} : DividerProps) {
    return (
        <Line 
            css={{width: `${(width === undefined)? `${width}px` : "max-width"}`}}
            {...rest}/>
    );
}