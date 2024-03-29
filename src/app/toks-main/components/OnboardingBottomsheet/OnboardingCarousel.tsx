import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import '../../style/carousel.css';
import { Button, LOGIN_URL } from '@/common';

import { ONBOARDING_IMAGES } from '../../constants/imageUrl';

const setting = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'dots_custom',
};

export const OnboardingCarousel = () => {
  const slider = useRef<Slider>(null);
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

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
            <div key={url} className="max-h-bottomSheetImage overflow-auto">
              <Image className="w-full" alt="onboarding" src={url} />
            </div>
          ))}
        </Slider>
      </div>
      {currentSlide !== 2 ? (
        <Button
          onClick={() => slider?.current?.slickNext()}
          className="absolute bottom-0px left-0 right-0 mx-auto w-full"
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
          className="absolute bottom-0px left-0 right-0 mx-auto w-full"
          size="L"
          textColor="kakaoText"
          typo="subheadingBold"
          backgroundColor="kakaoBackground"
          onClick={() => {
            router.replace(LOGIN_URL);
          }}
        >
          카카오로 쉽게 로그인하기
        </Button>
      )}
    </div>
  );
};
