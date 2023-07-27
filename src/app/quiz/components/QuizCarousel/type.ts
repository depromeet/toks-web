import { QuizRecommendResponse } from '@/app/quiz/models/quiz';

export interface QuizCarouselProps {
  className?: string;
  quizRecommendModels: QuizRecommendResponse[];
}
