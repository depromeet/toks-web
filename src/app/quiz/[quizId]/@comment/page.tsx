import { Comment, CommentForm, GetStartedButton } from '@/app/quiz/components';
import { getCommentsByQuizId } from '@/app/quiz/remotes/comment';

type Props = {
  params: {
    quizId: string;
  };
};

let a = 1;
async function CommentPage({ params: { quizId } }: Props) {
  const comments = await getCommentsByQuizId(quizId);
  const isCommentEmpty = comments.length === 0;
  console.log(a++);
  return (
    <div className="mt-8 flex flex-col gap-8">
      <CommentForm quizId={quizId} commentCount={comments.length} />
      {!isCommentEmpty && (
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
      <GetStartedButton isCommentEmpty={isCommentEmpty} />
    </div>
  );
}

export default CommentPage;
