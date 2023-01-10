import styled from '@emotion/styled';

const ANSWERWRAPPER_HEIGHT = 'calc(62vh - 280px)';
const ANSWERWRAPPER_HEIGHT_DURING_QUIZ = 'calc(80vh - 35px)';
export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

export const AnswerWrapper = styled.div`
  height: ${ANSWERWRAPPER_HEIGHT};
  overflow: auto;
`;

export const AnswerWrapperDuringQuiz = styled.div`
  height: ${ANSWERWRAPPER_HEIGHT_DURING_QUIZ};
  overflow: auto;
`;
