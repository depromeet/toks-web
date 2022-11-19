import { css } from '@emotion/css';

export const shadows = {
  book01: css`
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.15);
  `,
  card01: css`
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  `,
  profile: css`
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  `,
  tooltip: css`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 2px 6px 12px rgba(0, 0, 0, 0.12);
  `,
} as const;
