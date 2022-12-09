import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Info = styled.div`
  width: 700px;
`;

export const Header = styled.div``;

export const Body = styled.div`
  margin-top: 20px;
`;

export const Footer = styled.div`
  margin-top: 46px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray020};
`;

export const StudyTags = styled.div`
  margin-top: 20px;
`;
