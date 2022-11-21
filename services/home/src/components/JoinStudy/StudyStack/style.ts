import styled from '@emotion/styled';
import {theme} from '@depromeet/theme'

export const Box = styled.span`
  height: 32px;
  padding: 8px 16px;
  background-color: ${theme.colors.gray080};
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.white};

  &:first-of-type{
    margin-left: 0;
  }
  margin-left: 8px;
`;
