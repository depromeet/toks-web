import styled from '@emotion/styled';

const ICON_SIZE = '24px' as const;
const ICON_RADIUS = '12px' as const;

export const Img = styled.img`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
  border-radius: ${ICON_RADIUS};
`;
