import { ReactElement } from 'react';
import { DateText, DetailDescriptionText, InfoTitle, WhenText } from './style';

// 컴포넌트를 받을 때 ReactElement로 props를 받는게 맞는지 확인 필요.
// 공통 컴포넌트 개발이후에 스타일 일부 제거 필요.
type StudyInfoProps = {
  leftAddon: ReactElement;
  title: ReactElement;
  description?: ReactElement;
  start?: ReactElement;
  startDate?: ReactElement;
  done?: ReactElement;
  doneDate?: ReactElement;
  joinInput?: ReactElement;
};
export function StudyInfo({
  leftAddon,
  title,
  description,
  start,
  startDate,
  done,
  doneDate,
  joinInput,
}: StudyInfoProps) {
  return (
    <>
      {leftAddon}
      <InfoTitle>{title}</InfoTitle>
      <DetailDescriptionText>{description}</DetailDescriptionText>
      <WhenText>{start}</WhenText>
      <DateText>{startDate}</DateText>
      <WhenText>{done}</WhenText>
      <DateText>{doneDate}</DateText>
      {joinInput}
    </>
  );
}
