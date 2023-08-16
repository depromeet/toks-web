import { OX } from '@/app/quiz/models/quiz';

export interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitted: boolean;
  isSelected?: boolean;
  OXType?: OX;
  imageUrl?: string;
  percentage?: number;
  participationLabel?: string;
  className?: string;
  name: string;
  handleSubmitQuiz: () => void;
}
