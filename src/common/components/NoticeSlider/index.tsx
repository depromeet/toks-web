import { useRef } from 'react';
import Slider from 'react-slick';

import { Text } from '..';

const setting = {
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type NoticeSliderProp = {
  images: string[];
  onClick: VoidFunction;
};

export const NoticeSlider = ({ images, onClick }: NoticeSliderProp) => {
  const slider = useRef<Slider>(null);
  return (
    <Slider ref={slider} className="w-full" {...setting}>
      {images?.map((url, idx) => (
        <div
          onClick={onClick}
          className="relative h-auto rounded-12px bg-white"
        >
          <img
            className="z-0 h-auto w-full rounded-12px"
            alt="notice banner"
            src={url}
          />
          <span className="absolute bottom-12px right-12px z-10 w-fit rounded-100px bg-gray-120 px-12px py-8px opacity-50">
            <Text typo="caption">
              {idx + 1}/{images.length}
            </Text>
          </span>
        </div>
      ))}
    </Slider>
  );
};
