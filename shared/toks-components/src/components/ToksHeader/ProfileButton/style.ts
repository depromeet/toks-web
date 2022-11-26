import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { FONT_SIZE, FONT_WEIGHT, ICON_RADIUS, ICON_SIZE } from './constants';

export const Button = styled.button`
  display: flex;
  height: 44px;
  align-items: center;
  border-radius: 25px;
  padding: 11px 22px;
  background-color: ${theme.colors.gray110};
  border: 2px solid ${theme.colors.gray080};
`;

export const Img = styled.img`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  border-radius: ${ICON_RADIUS};
`;

export const Text = styled.span`
  font-weight: ${FONT_WEIGHT};
  font-size: ${FONT_SIZE};
  color: ${theme.colors.white};
  margin-left: 12px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.6px;
`;
