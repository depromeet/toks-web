import { Comment } from '@/components/Comment';

type Props = {
  params: {
    quizId: string;
  };
};

function CommentPage({ params: { quizId } }: Props) {
  return (
    <div>
      <div>Comment Page : {quizId}</div>
      <Comment
        commentId={1}
        profileImgUrl={undefined}
        name="윤두현"
        timeAgo="한 달 전"
        comment="얼마나 구하기 귀는 위하여, 위하여서. 그들에게 기쁘며, 것은 위하여 인생에 피에 못할 보라. 그러므로 만물은 어디 앞이 온갖 피어나기 쓸쓸하랴?"
        like={0}
      />
    </div>
  );
}

export default CommentPage;
