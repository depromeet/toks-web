'use client';

import { useRouter } from 'next/navigation';

import { QuizCarousel, Text } from '@/common';

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
      <QuizCarousel className="mt-20px" />
    </div>
  );
}
