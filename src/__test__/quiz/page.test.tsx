import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import QuizPage from '@/app/quiz/page';

test('MyPage', () => {
  render(<QuizPage />);
  expect(screen.getByText(/퀴즈의 ID로 조회해주세요./i)).toBeDefined();
});
