import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 656px;
  height: 762px;
  padding: 36px;
  background-color: ${theme.colors.gray100};
  margin: 0 auto;
  border: 1.4px solid ${theme.colors.gray080};
  border-radius: 16px;
`;

export const DescriptionContainer = styled.div`
  margin-top: 52px;
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const JoinMessage = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.gray010};
  text-align: center;
  padding: 80px 0 24px 0;
  justify-content: center;
  display: flex;
`;
