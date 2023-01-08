import { TOKS_HEADER_HEIGHT } from '@depromeet/toks-components';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${TOKS_HEADER_HEIGHT});
  text-align: center;
  background-color: transparent;

  padding-top: 126px;
`;
