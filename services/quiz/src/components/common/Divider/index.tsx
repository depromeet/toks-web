import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

interface DividerProps {
    width: number
}

export const Line = styled.div`
    height: 1px;
    background-color: ${theme.colors.gray080};
`

export function Divider({ width } : DividerProps) {
    return (<Line css={{width:`${width}px`}}/>);
}