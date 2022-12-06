import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const JoinGuide = styled.div`
  justify-content: center;
  display: flex;
`;

//헤더 height 70px, 아래 제목과 80px 공백 필요해서 아래와 같이 설정 fixed 속성 바뀌면 수정 필요할 듯.
export const HeaderContainer = styled.div`
  margin-bottom: 150px;
`;

export const pageTitle = css`
  padding-bottom: 60px;
`;