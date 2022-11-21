import { theme } from "@depromeet/theme";
import styled from "@emotion/styled";


export const DateWrapper = styled.div`
display: flex;
height: 20px;
padding-top: 16px;
&:first-of-type {
  margin-left: 0px;
}
margin-right: 39px;
`;

export const WhenText = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: ${theme.colors.white};
margin-right: 11px;
height: 20px;
`;

export const DateText = styled.div`
font-weight: 700;
font-size: 20px;
color: ${theme.colors.white};
height: 20px;
`;
