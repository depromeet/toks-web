import { Comment, CommentForm, GetStartedButton } from '@/app/quiz/components';
import { getCommentsByQuizId } from '@/app/quiz/remotes/comment';

type Props = {
  params: {
    quizId: string;
  };
};

async function CommentPage({ params: { quizId } }: Props) {
  const comments = await getCommentsByQuizId(quizId);
  const isEmptyComment = comments.length === 0;
  return (
    <div className="mt-32px flex flex-col gap-32px">
      <CommentForm quizId={quizId} commentCount={comments.length} />
      {!isEmptyComment && (
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
      )}
      <GetStartedButton isCommentEmpty={isEmptyComment} />
    </div>
  );
}

export default CommentPage;
