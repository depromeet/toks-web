import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import '../style/carousel.css';

import { Button } from '@/common';

import { ONBOARDING_IMAGES } from '../constants/imageUrl';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export const OnboardingCarousel = () => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(currentSlide);

  const setting = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'dots_custom',
  };

  console.log(slider.current);

  return (
    <div className="relative w-full">
      <div className="pb-50px">
        <Slider
          ref={slider}
          beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
          className="w-full"
          {...setting}
        >
          {ONBOARDING_IMAGES.map((url) => (
            <div key={url}>
              <Image
                className="m-auto"
                width={335}
                height={420}
                alt="onboarding"
                src={url}
              />
            </div>
          ))}
        </Slider>
      </div>
      {currentSlide !== 2 ? (
        <Button
          onClick={() => slider?.current?.slickNext()}
          className="absolute bottom-0px w-full"
          size="L"
          typo="subheadingBold"
          backgroundColor="primaryDefault"
        >
          다음
        </Button>
      ) : (
        <Button
          iconName="KAKAO"
          iconPosition="LEFT"
          className="absolute bottom-0px w-full"
          size="L"
          textColor="kakaoText"
          typo="subheadingBold"
          backgroundColor="kakaoBackground"
          onClick={() => console.log('login')}
        >
          카카오로 쉽게 로그인하기
        </Button>
      )}
    </div>
  );
};
