import Image from 'next/image';

import { ICON_URL, bgColor, cn } from '@/common';

import { QuizButtonProps } from './type';

interface ThumbnailProps
  extends Pick<QuizButtonProps, 'OXType' | 'imageUrl' | 'className'> {
  name?: string;
}

export function Thumbnail({
  OXType,
  imageUrl,
  name = '퀴즈',
  className,
}: ThumbnailProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-square w-140px items-center justify-center overflow-hidden rounded-8px',
        OXType &&
          (OXType === 'O' ? bgColor['blue10'] : bgColor['dangerDefault']),
        className
      )}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${name}사진`}
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          layout="fill"
          blurDataURL={ICON_URL.BLUR_BACKGROUND}
        />
      )}
      {OXType && (
        <Image
          src={ICON_URL[OXType]}
          alt={`${OXType}사진`}
          className="rounded-8px"
          width={70}
          height={70}
        />
      )}
    </div>
  );
}
