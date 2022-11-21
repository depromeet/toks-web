import { ReactElement } from 'react';

// 컴포넌트를 받을 때 ReactElement로 props를 받는게 맞는지 확인 필요.
type StudyInfoProps = {
  leftAddon: ReactElement;
  title: ReactElement;
  description?: ReactElement;
  start?: ReactElement;
  startDate?: ReactElement;
  done?: ReactElement;
  doneDate?: ReactElement;
};
export function StudyInfo({ leftAddon, title, description, start, startDate, done, doneDate }: StudyInfoProps) {
  return (
    <>
      <>{leftAddon}</>
      <>{title}</>
      <>{description}</>
    </>
  );
}
