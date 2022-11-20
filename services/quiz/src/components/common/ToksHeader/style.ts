import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

const HEADER_MAX_WIDTH = '1200px' as const;
const HEADER_MIN_WIDTH = '320px' as const;
const HEADER_HEIGHT = '70px' as const;

const TITLE_FONT_SIZE = '32px' as const;
const TITLE_FONT_WEIGHT = 700 as const;

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #eee;
`;

export const Container = styled.div`
  display: flex;
  max-width: ${HEADER_MAX_WIDTH};
  min-width: ${HEADER_MIN_WIDTH};
  height: ${HEADER_HEIGHT};
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${TITLE_FONT_SIZE};
  color: ${theme.colors.gray060};
  font-weight: ${TITLE_FONT_WEIGHT};
  flex: 1;
`;
