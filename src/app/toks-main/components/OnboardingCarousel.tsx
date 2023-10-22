import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { Button } from '@/common';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const ONBOARDING_IMAGES = [
  {
    url: 'https://toks-web-assets.s3.amazonaws.com/onboarding/onboarding-1.svg',
    idx: 'onboarding-1',
  },
  {
    url: 'https://toks-web-assets.s3.amazonaws.com/onboarding/onboarding-2.svg',
    idx: 'onboarding-2',
  },
  {
    url: 'https://toks-web-assets.s3.amazonaws.com/onboarding/onboarding-3.svg',
    idx: 'onboarding-3',
  },
];

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
  };

  console.log(slider.current);

  return (
    <div className="relative w-full">
      <div className="pb-100px">
        <Slider
          ref={slider}
          beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
          className="w-full"
          {...setting}
        >
          {ONBOARDING_IMAGES.map(({ url }) => (
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
          className="absolute bottom-0px w-full"
          size="L"
          typo="subheadingBold"
          backgroundColor="primaryDefault"
          onClick={() => console.log('login')}
        >
          로그인
        </Button>
      )}
    </div>
  );
};
