import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  positon: relative;
  display: flex;
  gap: 62px;
  flex-direction: column;
  width: 600px;
  padding: 28px;
  background-color: ${theme.colors.gray110};
  margin: 0 auto;
  border: 1.4px solid ${theme.colors.gray100};
  border-radius: 16px;
`;

export const dateStyle = css`
  line-height: 16px;
  margin-right: 12px;
  :first-of-type {
    margin-left: 0;
  }
  margin-left: 36px;
`;
