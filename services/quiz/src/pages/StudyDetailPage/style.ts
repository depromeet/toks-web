import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Page = styled.div`
  background-color: ${theme.colors.gray120};
  color: ${theme.colors.white};
`;

export const Section = styled.section`
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

export const FlexRow = styled.div`
  display: flex;
`;
