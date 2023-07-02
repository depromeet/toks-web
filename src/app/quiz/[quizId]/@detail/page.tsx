type Props = {
  params: {
    quizId: string;
  };
};

function DetailPage({ params: { quizId } }: Props) {
  return <div>Detail Page : {quizId}</div>;
}

export default DetailPage;
