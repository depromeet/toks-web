import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const StudyPeerAnswerWrapper = styled.div`
  overflow-y: auto;
  height: 23vh;
`;

export const AccordionCotainer = styled.div`
  border: 1px dashed ${theme.colors.gray050};
  width: 100%;
  border-radius: 12px;
  :first-of-type {
    margin: 0;
  }
  margin-top: 12px;
  position: relative;
`;

export const SubmitNotice = styled.div`
  position: absolute;
  background: #171717;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  height: 33vh;
`;
