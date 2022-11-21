import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${theme.colors.gray110};
  height: 100vh;
`;

export const JoinGuide = styled.span`
  font-weight: 700;
  font-size: 32px;
  color: ${theme.colors.white};
  justify-content: center;
  /* align-items: center; */
  display: flex;
  margin-bottom: 33px;
`;
