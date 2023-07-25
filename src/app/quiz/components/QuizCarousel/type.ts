import { QuizRecommendModel } from '@/app/quiz/models/recommendation';

export interface QuizCarouselProps {
  className?: string;
  quizRecommendModels: QuizRecommendModel[];
}
