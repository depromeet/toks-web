import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 600px;
  padding: 28px;
  background-color: ${theme.colors.gray110};
  margin: 0 auto;
  border: 1.4px solid ${theme.colors.gray100};
  border-radius: 16px;
`;

export const DescriptionContainer = styled.div`
  margin-top: 62px;
`;

export const tagMargin = css`
  :first-of-type {
    margin-left: 0;
  }
  margin-left: 8px;
`;

// button 수정되면 수정하기
export const ButtonContainer = styled.div`
  width: 100%;
  height: 54px;
  margin-top: 62px;
`;

export const descriptionStyle = css`
  line-height: 24px;
`;

export const dateStyle = css`
  line-height: 16px;
  margin-right: 12px;
  :first-of-type {
    margin-left: 0;
  }
  margin-left: 36px;
`;
