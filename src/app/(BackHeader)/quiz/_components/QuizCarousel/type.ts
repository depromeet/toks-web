import { QuizRecommendResponse } from '@/app/(BackHeader)/quiz/models/quiz';

export interface QuizCarouselProps {
  className?: string;
  quizRecommendModels: QuizRecommendResponse[];
}
