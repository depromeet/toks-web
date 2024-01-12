import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import '../../_lib/style/carousel.css';
import { LOGIN_URL } from '@/common';
import { Button } from '@/common/components/Button';

export const OnboardingCarousel = () => {
  const slider = useRef<Slider>(null);
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

  const setting = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'dots_custom',
  };

  const IMAGE_URL = [
    '/img/onboarding/onboarding-1.svg',
    '/img/onboarding/onboarding-2.svg',
    '/img/onboarding/onboarding-3.svg',
  ];

  return (
    <div className="relative w-full">
      <div className="pb-50px">
        <Slider
          ref={slider}
          beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
          className="w-full"
          {...setting}
        >
          {IMAGE_URL.map((url) => (
            <div key={url} className="max-h-bottomSheetImage overflow-auto">
              <Image
                className="w-full"
                alt="onboarding"
                src={url}
                width={500}
                height={500}
              />
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
