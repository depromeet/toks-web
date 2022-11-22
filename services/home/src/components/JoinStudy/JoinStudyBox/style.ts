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
  margin-top: 47px;
`;

export const JoinMessage = styled.span`
  text-align: center;
  padding: 80px 0 24px 0;
  justify-content: center;
  display: flex;
`;
export const DescriptionBox = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background-color: ${theme.colors.gray080};
`;

export const TagContainer = styled.span`
  &:first-of-type {
    margin-left: 0;
  }
  margin-left: 8px;
`;

export const DateWrapper = styled.div`
  display: flex;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-right: 39px;
  align-items: center;
`;

export const DateText = styled.p`
  color: ${theme.colors.white};
  margin: 0;
  margin-left: 11px;
`;