import styled from '@emotion/styled';

export const Info = styled.div`
  width: 50%;
`;

export const Header = styled.div``;

export const Body = styled.div`
  margin-top: 16px;
`;

export const Footer = styled.div`
  margin-top: 36px;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const Skeleton = styled.div`
  height: 225px;
  &:after {
    content: '.';
    visibility: hidden;
  }
`;

export const Space = styled.div``;
