import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 62px;
  flex-direction: column;
  width: 600px;
  padding: 28px;
  background-color: ${theme.colors.gray110};
  margin: 0 auto;
  border: 1px solid ${theme.colors.gray100};
  border-radius: 16px;
`;
