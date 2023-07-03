type Props = {
  params: {
    quizId: string;
  };
  detail: React.ReactNode;
  comment: React.ReactNode;
};

function QuizIdLayout({ params: { quizId }, detail, comment }: Props) {
  return (
    <div>
      <div>Quiz Id : {quizId}</div>
      {detail}
      {comment}
    </div>
  );
}

export default QuizIdLayout;
