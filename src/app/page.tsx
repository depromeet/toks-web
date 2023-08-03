'use client';

import { useRouter } from 'next/navigation';

import { QuizCarousel, Text } from '@/common';
import { Tooltip } from '@/common/components/Tooltip';

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative">
      <Text
        typo="headingL"
        color="success"
        onClick={() =>
          router.push('https://api.tokstudy.com/oauth2/authorize/kakao')
        }
      >
        login
      </Text>
      <QuizCarousel className="mt-20px" />
      <Tooltip message="관심있는 카테고리" isVisibleTooltip={true}>
        <Text typo="subheading" color="success">
          Tooltips!!
        </Text>
      </Tooltip>
      <Tooltip message="관심있는" isVisibleTooltip={true}>
        <Text typo="headingL" color="success">
          ?
        </Text>
      </Tooltip>
    </div>
  );
}
