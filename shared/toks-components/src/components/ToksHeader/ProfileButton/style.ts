import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

const ICON_SIZE = '24px' as const;
const ICON_RADIUS = '12px' as const;

const FONT_SIZE = '20px' as const;
const FONT_WEIGHT = 700 as const;

export const Button = styled.button`
  display: flex;
  height: 50px;
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
`;
