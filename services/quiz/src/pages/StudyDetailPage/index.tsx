import BackButton from "./components/BackButton/BackButton";
import Header from "./components/Header/Header";
import QuizList from "./components/QuizList/QuizList";
import Ranking from "./components/Ranking/Ranking";
import StudyInfo from "./components/StudyInfo/StudyInfo";
import StudyProgress from "./components/StudyProgress/StudyProgress";

function App() {
  return (<>
    <Header/>
    <BackButton/>
    <StudyInfo/>
    <StudyProgress/>
    <QuizList/>
    <Ranking/>
  </>);
}

export default App;
