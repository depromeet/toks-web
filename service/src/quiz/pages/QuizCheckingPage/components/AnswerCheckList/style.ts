import styled from '@emotion/styled';
const ANSWERWRAPPER_HEIGHT = 'calc(80vh - 340px)';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

export const AnswerWrapper = styled.div`
  height: ${ANSWERWRAPPER_HEIGHT};
  overflow: auto;
`;
