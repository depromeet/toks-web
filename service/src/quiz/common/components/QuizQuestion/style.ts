import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const StudyQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background-color: ${theme.colors.gray110};
  border-radius: 16px;
  width: 50%;
  height: 80vh;
  margin-right: 36px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${theme.colors.gray090};
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  overflow-y: auto;
  flex: 1;
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
  width: 100%;
  height: 188px;
`;

export const ViewerContainer = styled.div`
  height: 320px;
`;
