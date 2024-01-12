'use client';

import { useRef } from 'react';

import { useSubmitCommentMutation } from '@/app/(BackHeader)/quiz/_hooks/useSubmitCommentMutation';
import { Button } from '@/common/components/Button';
import { TextField } from '@/common/components/TextField';

interface CommentFormProps {
  commentCount: number;
  quizId: string;
}

export function CommentForm({ commentCount, quizId }: CommentFormProps) {
  const { submitComment } = useSubmitCommentMutation(quizId);
  const commentTextAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form
      className="flex shrink-0 flex-col"
      onSubmit={async (e) => {
        e.preventDefault();
        if (commentTextAreaRef.current) {
          try {
            submitComment(commentTextAreaRef.current.value);
            commentTextAreaRef.current.value = '';
          } catch {
            throw new Error('댓글 작성 요청에 실패하였습니다.');
          }
        }
      }}
    >
      <TextField
        required
        ref={commentTextAreaRef}
        className="mt-6px"
        type="text"
        height={82}
        placeholder="댓글을 남겨보세요."
        label={`댓글 ${commentCount}`}
        aria-label="댓글 작성 입력"
      />
      <div className="mt-12px flex justify-end">
        <Button
          backgroundColor="primaryDefault"
          typo="bodyBold"
          textColor="gray10"
          size="S"
          type="submit"
          aria-label="작성 확인 버튼"
        >
          확인
        </Button>
      </div>
    </form>
  );
}
