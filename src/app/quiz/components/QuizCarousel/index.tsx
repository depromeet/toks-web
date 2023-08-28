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
    ({ quiz, quizReplyHistoryCount, quizCommentCount }) => ({
      quizId: quiz.id,
      tags: quiz.tags,
      quizDescription: quiz.title,
      image: quiz.question.buttons?.A?.imageUrl ?? quiz.question?.imageUrl,
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
            tags,
            quizDescription,
            image,
            quizReplyHistoryCount,
            quizCommentCount,
            quizType,
          }) => (
            <SwiperSlide key={quizId}>
              <QuizCard
                categoryTitle={tags.join(' ')}
                quizDescription={quizDescription}
                images={image ? [image] : []}
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
