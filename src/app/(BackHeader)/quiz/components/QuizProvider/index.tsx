'use client';

import { MutableRefObject, createContext, useRef } from 'react';

export const QuizContext = createContext<{
  commentListRef: MutableRefObject<null>;
} | null>(null);

interface QuizProviderProps {
  children: React.ReactNode;
}

export function QuizProvider({ children }: QuizProviderProps) {
  const commentListRef = useRef(null);
  const context = { commentListRef };
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
}
