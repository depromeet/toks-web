export type QuizType = 'A_B_IMAGE' | 'A_B_SIMPLE' | 'O_X_IMAGE' | 'O_X_SIMPLE';

export interface Quiz {
  id: number;
  categoryId: string;
  categoryTitle?: string;
  title: string;
  question: Question;
  quizType: QuizType;
  description: string;
  answer: string;
}

export interface Question {
  question: string;
  buttons: {
    '1': QuizButton;
    '2': QuizButton;
  };
}

export interface QuizButton {
  imageUrl?: string;
  button: { name: string };
}

export interface Category {
  id: string;
  depth: number;
  name: string;
  description: string;
}
