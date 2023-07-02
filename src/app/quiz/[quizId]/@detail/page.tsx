type Props = {
  params: {
    quizId: string;
  };
};

// 임시 타입
type QuizType = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

const getQuizDetail = async (quizId: string) => {
  const result = await fetch(
    // 테스트로 가져온 투두데이터
    `https://jsonplaceholder.typicode.com/todos/${quizId}`
  );
  const todo: QuizType = await result.json();
  return todo;
};

async function DetailPage({ params: { quizId } }: Props) {
  const quizDetailData = await getQuizDetail(quizId);
  return (
    <div style={{ backgroundColor: '#d18760' }}>
      <h1>퀴즈 디테일 영역 입니다.</h1>
      <div>아이디 가져오기 가능 Quiz Id : {quizId}</div>
      <div>Todo Title : {quizDetailData.title}</div>
      <div>
        Completed :
        {quizDetailData.completed ? <span> Yes</span> : <span> No</span>}
      </div>
    </div>
  );
}

export default DetailPage;
