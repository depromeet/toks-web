type Props = {
  params: {
    quizId: string;
  };
  detail: React.ReactNode;
  comment: React.ReactNode;
  recommendation: React.ReactNode;
};

function QuizIdLayout({
  params: { quizId },
  detail,
  comment,
  recommendation,
}: Props) {
  return (
    <div>
      <div>Quiz Id : {quizId}</div>
      {detail}
      {comment}
      {recommendation}
    </div>
  );
}

export default QuizIdLayout;
