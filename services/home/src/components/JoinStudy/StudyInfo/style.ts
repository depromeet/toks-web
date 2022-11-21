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

export const DateWrapper = styled.div`
  display: flex;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-right: 39px;
  align-items: center;
`;

export const WhenText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.white};
  margin: 0 11px 0 0;
  &:first-of-type {
    padding-left: 0;
  }
  padding-left: 40px;
`;

export const DateText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.white};
  margin: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  &:first-of-type {
    margin-top: 0;
  }
  margin-top: 36px;
`;
