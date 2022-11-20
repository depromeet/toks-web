import { BackButton } from 'components/common/BackButton';
import { ToksHeader } from 'components/common/ToksHeader';
import { QuizList } from 'components/StudyDetailPage/QuizList';
import { Ranking } from 'components/StudyDetailPage/Ranking';
import { StudyInfo } from 'components/StudyDetailPage/StudyInfo';
import { StudyProgress } from 'components/StudyDetailPage/StudyProgress';

export function StudyDetailPage() {
  return (
    <>
      <ToksHeader />
      <BackButton />
      <StudyInfo />
      <StudyProgress />
      <QuizList />
      <Ranking />
    </>
  );
}
