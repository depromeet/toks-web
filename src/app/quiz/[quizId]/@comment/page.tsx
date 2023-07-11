import { Comment } from '@/app/quiz/components';

import { getCommentsByQuizId } from '../../remotes/comment';

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
        {comments.map(({ id, nickname, content, likeCount, createdAt }) => (
          <Comment
            key={id}
            commentId={id}
            name={nickname}
            comment={content}
            timeAgo={createdAt}
            profileImgUrl={undefined}
            like={likeCount}
          />
        ))}
      </Comment.List>
    </div>
  );
}

export default CommentPage;
