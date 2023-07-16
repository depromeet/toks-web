export interface QuizCardProps {
  categoryTitle: string;
  quizDescription: string;
  likeCount?: number;
  commentCount?: number;
  images?: string[];
  sizeType?: 'large' | 'small';
  quizType?: 'default' | 'ox';
}
