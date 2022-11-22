import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

export const JoinGuide = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${theme.colors.white};
  justify-content: center;
  display: flex;
  margin-bottom: 33px;
`;

//헤더 height 70px, 아래 제목과 80px 공백 필요해서 아래와 같이 설정 fixed 속성 바뀌면 수정 필요할 듯.
export const HeaderContainer = styled.div`
  margin-bottom: 150px;
`;
