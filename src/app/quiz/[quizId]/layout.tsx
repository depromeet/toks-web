type Props = {
  detail: React.ReactNode;
  comment: React.ReactNode;
  recommendation: React.ReactNode;
};

function QuizIdLayout({ detail, comment, recommendation }: Props) {
  return (
    <div className="pb-80px">
      {detail}
      {comment}
      {recommendation}
    </div>
  );
}

export default QuizIdLayout;
