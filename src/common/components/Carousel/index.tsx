'use client';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { QuizCard } from '@/common';

import 'swiper/css';

export function Carousel() {
  const settings: SwiperCore = {
    spaceBetween: 8,
    slidesPerView: 1.03,
  };
  return (
    // style={{ margin: '0 -20px', padding: '0 20px' }}
    // -mx-20px px-20px
    <Swiper {...settings}>
      <SwiperSlide>
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={['https://source.unsplash.com/random/?programming']}
          sizeType="small"
          likeCount={10}
          commentCount={10}
        />
      </SwiperSlide>
      <SwiperSlide>
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={['https://source.unsplash.com/random/?programming']}
          sizeType="small"
          likeCount={10}
          commentCount={10}
        />
      </SwiperSlide>
      <SwiperSlide>
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={[
            'https://source.unsplash.com/random/?programming',
            'https://source.unsplash.com/random/daily',
          ]}
          likeCount={10}
          commentCount={10}
          sizeType="small"
          quizType="ox"
        />
      </SwiperSlide>
      <SwiperSlide>
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          likeCount={10}
          commentCount={10}
          images={['https://source.unsplash.com/random/?programming']}
          sizeType="small"
        />
      </SwiperSlide>
      <SwiperSlide>
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          likeCount={10}
          commentCount={10}
          quizType="ox"
          sizeType="small"
        />
      </SwiperSlide>
    </Swiper>
  );
}
