import BackButton from 'components/common/BackButton/BackButton';
import Header from 'components/common/Header/Header';
import QuizList from 'components/StudyDetailPage/QuizList/QuizList';
import Ranking from 'components/StudyDetailPage/Ranking/Ranking';
import StudyInfo from 'components/StudyDetailPage/StudyInfo/StudyInfo';
import StudyProgress from 'components/StudyDetailPage/StudyProgress/StudyProgress';

function App() {
  return (
    <>
      <Header />
      <BackButton />
      <StudyInfo />
      <StudyProgress />
      <QuizList />
      <Ranking />
    </>
  );
}

export default App;
