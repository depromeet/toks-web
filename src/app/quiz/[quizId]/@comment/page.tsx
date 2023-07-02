type Props = {
  params: {
    quizId: string;
  };
};

function CommentPage({ params: { quizId } }: Props) {
  return <div>Comment Page : {quizId}</div>;
}

export default CommentPage;
