import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 42px;
  border-radius: 16px;

  :nth-child(n + 2) {
    margin-top: 12px;
  }
`;
