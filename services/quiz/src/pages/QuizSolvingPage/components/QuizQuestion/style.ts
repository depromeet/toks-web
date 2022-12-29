import styled from '@emotion/styled';
import { theme } from '@depromeet/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: ${theme.colors.gray110};
  border-radius: 16px;
  width: 40vw;
  height: 82vh;
  margin-right: 52px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${theme.colors.gray090};
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  overflow: auto;
  height: 78%;
`;
