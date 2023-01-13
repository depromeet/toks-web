import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ANSWERWRAPPER_HEIGHT = 'calc(55vh - 95px)';
const CREATOR_HEIGHT = 'calc(80vh - 45px)';

export const PeerAnswerWrapper = styled.div<{ isQuizCreator: boolean }>`
  /* overflow-y: auto; */
  ${props => {
    const { isQuizCreator } = props;
    return css`
      height: ${isQuizCreator ? `${CREATOR_HEIGHT}` : `${ANSWERWRAPPER_HEIGHT}`};
    `;
  }}
`;

export const Wrapper = styled.div`
  height: 53vh;
`;
