'use client';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { QuizCard } from '@/common';

import 'swiper/css';
import { QuizCarouselProps } from './type';

export function QuizCarousel({
  className,
  quizRecommendModels,
}: QuizCarouselProps) {
  const settings: SwiperCore = {
    spaceBetween: 8,
    slidesPerView: 1.03,
  };

  const recommendQuizzes = quizRecommendModels.map(
    ({ quiz, category, quizReplyHistoryCount, quizCommentCount }) => ({
      quizId: quiz.id,
      categoryTitle: category.name,
      quizDescription: quiz.title,
      images: Object.values(quiz.question.buttons)
        .slice(0, 1)
        .map((button) => button.imageUrl ?? '')
        .filter((url) => url !== ''),
      quizReplyHistoryCount,
      quizCommentCount,
      quizType: quiz.quizType,
    })
  );

  return (
    <div className={className}>
      <Swiper className="!important -mx-20px px-20px" {...settings}>
        {recommendQuizzes.map(
          ({
            quizId,
            categoryTitle,
            quizDescription,
            images,
            quizReplyHistoryCount,
            quizCommentCount,
            quizType,
          }) => (
            <SwiperSlide key={quizId}>
              <QuizCard
                categoryTitle={categoryTitle}
                quizDescription={quizDescription}
                images={images}
                sizeType="small"
                likeCount={quizReplyHistoryCount}
                commentCount={quizCommentCount}
                quizType={quizType.startsWith('A_B_') ? 'default' : 'ox'}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
