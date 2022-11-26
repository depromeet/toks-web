import { css } from '@emotion/react';

export const typography = {
  title01: css`
    font-size: 58px;
    font-weight: 700;
    line-height: 73px;
    letter-spacing: -0.6px;
  `,
  title02: css`
    font-size: 47px;
    font-weight: 700;
    line-height: 61px;
    letter-spacing: -0.6px;
  `,
  title03: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: -0.6px;
  `,
  title04: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.6px;
  `,
  headline: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: -0.6px;
  `,
  subhead: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;
  `,
  body01: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.6px;
  `,
  body02: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6px;
  `,
  body03: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.6px;
  `,
} as const;

export type Typography = keyof typeof typography;
