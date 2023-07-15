import { getCommentsByQuizId } from '../remotes/comment';

import { Comment } from '@/components/pages/quiz';

type Props = {
  params: {
    quizId: string;
  };
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
