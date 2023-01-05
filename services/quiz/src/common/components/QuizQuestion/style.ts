import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: ${theme.colors.gray110};
  border-radius: 16px;
  width: 50%;
  height: 80vh;
  margin-right: 52px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${theme.colors.gray090};
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  overflow: auto;
  height: 78%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RoundInfo = styled.div`
  background: rgba(255, 134, 47, 0.2);
  border-radius: 8px;
  padding: 4px 12px;
`;

export const ImageContainer = styled.div`
  width: 188px;
  height: 188px;
`;
