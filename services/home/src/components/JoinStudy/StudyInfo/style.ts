import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const InfoTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.white};
  line-height: 26px;
  padding-left: 8px;
`;

export const DetailDescriptionText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.white};
  padding-top: 16px;
  display: flex;
`;

export const TitleWrapper = styled.div`
  display: flex;
  &:first-of-type {
    margin-top: 0;
  }
  margin-top: 36px;
`;
