'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Text } from '@/common/components';
import { bgColor } from '@/common/foundation';

interface CommentFormProps {
  commentCount: number;
}

export function CommentForm({ commentCount }: CommentFormProps) {
  const [comment, setComment] = useState('');
  return (
    <form className={clsx('flex', 'flex-col')}>
      <Text typo="body" color="white">
        댓글 {commentCount}
      </Text>
      <input
        className="mt-1.5"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className={clsx('mt-3', bgColor['primaryDefault'])} type="button">
        확인
      </button>
    </form>
  );
}
