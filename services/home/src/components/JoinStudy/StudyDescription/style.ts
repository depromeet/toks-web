import styled from '@emotion/styled';
import { theme } from '@depromeet/theme';

export const DescriptionWrapper = styled.div`
  display: flex;
  height: 26px;
  :first-child{
    margin-top: 0;
  }
  margin-top: 34px;
`;

export const DescriptionBox = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background-color: ${theme.colors.gray080};
`;

export const DescriptionText = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.white};
  line-height: 26px;
  padding-left: 8px;

`;

export const DetailDescriptionText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.white};;
  padding-top: 19px;
`;

export const DateWrapper = styled.div`
  display: flex;
  height: 20px;
  padding-top: 24px;
`;

export const WhenText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.white};;
  margin-right: 11px;
`;

export const DateText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.white};;
  margin-right: 39px;
`;
