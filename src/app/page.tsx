'use client';

import { useRouter } from 'next/navigation';

import { QuizCarousel, Text } from '@/common';
import { FloatingButton } from '@/common/components/FloatingButton';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Text
        typo="headingL"
        color="success"
        onClick={() =>
          router.push('https://api.tokstudy.com/oauth2/authorize/kakao')
        }
      >
        login
      </Text>
      <FloatingButton />
      <QuizCarousel className="mt-20px" />
    </div>
  );
}
