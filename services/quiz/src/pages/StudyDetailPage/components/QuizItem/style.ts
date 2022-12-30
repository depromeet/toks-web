import styled from '@emotion/styled';

export const ListItem = styled.li`
  :nth-of-type(n + 2) {
    margin-top: 12px;
  }
`;

export const Item = styled.div`
  padding: 22px 38.5px 22px 28px;
  border-radius: 12px;
`;

export const ItemDetails = styled.details``;

export const ItemHeader = styled.summary`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const ItemBody = styled.div``;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Space = styled.div``;
