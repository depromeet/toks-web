'use client';

import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { CarouselCard } from '@/common/components/CarouselCard';

import { QuizCarouselProps } from './type';

export function QuizCarousel({
  className,
  quizRecommendModels,
}: QuizCarouselProps) {
  const router = useRouter();

  const settings: SwiperCore = {
    spaceBetween: 8,
    slidesPerView: 1.02,

    breakpoints: {
      320: {
        slidesPerView: 1.02,
      },
      390: {
        slidesPerView: 1.5,
      },
    },
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
          ({ quizId, tags, quizDescription, image, quizType }) => (
            <SwiperSlide key={quizId}>
              <CarouselCard
                categoryTitle={tags.join(' ')}
                quizDescription={quizDescription}
                images={image ? [image] : []}
                quizType={quizType.startsWith('A_B_') ? 'default' : 'ox'}
                handleCardClick={() => router.push(`/quiz/${quizId}`)}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
