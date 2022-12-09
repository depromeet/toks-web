import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Page = styled.div`
  background-color: ${theme.colors.gray120};
  height: 100vw;
  color: ${theme.colors.white};
`;

export const Section = styled.section`
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
