import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { HEADER_HEIGHT, HEADER_MAX_WIDTH, HEADER_MIN_WIDTH, TITLE_FONT_SIZE, TITLE_FONT_WEIGHT } from './constants';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${theme.colors.gray120};
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: ${HEADER_MAX_WIDTH};
  min-width: ${HEADER_MIN_WIDTH};
  height: ${HEADER_HEIGHT};
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  z-index: 1;
`;

export const Title = styled.div`
  font-size: ${TITLE_FONT_SIZE};
  color: ${theme.colors.white};
  font-weight: ${TITLE_FONT_WEIGHT};
  flex: 1;
`;
