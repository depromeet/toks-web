import { Comment } from '@/components/Comment';

type Props = {
  params: {
    quizId: string;
  };
};

type CommentType = {
  id: number;
  quizId: number;
  uid: number;
  content: string;
  createdAt: string;
};

const getCommentsByQuizId = async (quizId: string) => {
  const comments: CommentType[] = await fetch(
    `https://api.tokstudy.com/api/v1/quizzes/${quizId}/comments?page=0&size=100`
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.content);
  return comments;
};

async function CommentPage({ params: { quizId } }: Props) {
  const comments = await getCommentsByQuizId(quizId);
  return (
    <div>
      <Comment.List>
        {comments.map(({ id, uid, content, createdAt }) => (
          <Comment
            key={id}
            commentId={id}
            name={`사용자${uid}`}
            comment={content}
            timeAgo={createdAt}
            profileImgUrl={undefined}
            like={0}
          />
        ))}
      </Comment.List>
    </div>
  );
}

export default CommentPage;
