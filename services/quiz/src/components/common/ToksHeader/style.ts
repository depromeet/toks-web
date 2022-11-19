import styled from '@emotion/styled';

const Header = styled.header`
  position: fixed;
  height: 70px;
  display: flex;
  align-item: center;
  left: 0;
  right: 0;
  top: 0;
  background-color: #eee;
  padding: 0 252px 0 249px;
`;

const HeaderTitle = styled.div`
  font-size: 30px;
  color: #828282;
  font-weight: 700;
  flex: 1;
`;

export { Header, HeaderTitle };
