import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #eee;
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1200px;
  min-width: 320px;
  height: 70px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-size: 30px;
  color: #828282;
  font-weight: 700;
  flex: 1;
`;
