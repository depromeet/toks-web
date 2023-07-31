'use client';

import clsx from 'clsx';
import { Children, useState } from 'react';

import { Button } from '@/common';

interface CommentListProps {
  children: React.ReactNode;
}

export function CommentList({ children }: CommentListProps) {
  const comments = Children.toArray(children);
  const [isFold, setIsFold] = useState(() => comments.length > 3);
  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        {isFold ? comments.slice(0, 3) : children}
      </ul>
      {isFold && (
        <div
          className={clsx(
            'flex',
            'justify-center',
            'px-3',
            'items-center',
            'h-8',
            'mt-8'
          )}
        >
          <Button
            iconName="CHEVRON_DOWN"
            onClick={() => setIsFold(false)}
            aria-label="댓글 더보기 버튼"
          >
            댓글 더보기
          </Button>
        </div>
      )}
    </div>
  );
}
