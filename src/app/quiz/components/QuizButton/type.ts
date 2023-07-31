export interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitted: boolean;
  isSelected?: boolean;
  OXType?: 'O' | 'X';
  imageUrl?: string;
  percentage?: number;
  participationLabel?: string;
  className?: string;
  name: string;
}
