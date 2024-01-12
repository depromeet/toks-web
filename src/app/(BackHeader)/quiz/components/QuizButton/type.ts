import { OX } from '@/app/(BackHeader)/quiz/models/quiz';

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
}
