'use client';

import { useRouter } from 'next/navigation';

import { Button, Text } from '@/common';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <button className="bg-success shadow-book01">Toks</button>
      <Text typo="headingL" color="gray120">
        텍스트 입니다.
      </Text>
      <Text typo="headingM" color="success">
        텍스트 입니다.
      </Text>
      <Text typo="subheading" color="gray110">
        텍스트 입니다.
      </Text>
      <Text typo="subheadingBold" color="dangerDefault">
        텍스트 입니다.
      </Text>
      <Text typo="body" color="primaryDefault">
        텍스트 입니다.
      </Text>
      <Text typo="bodyBold" color="dangerPress">
        텍스트 입니다.
      </Text>
      <Text typo="caption" color="primaryPress">
        텍스트 입니다.
      </Text>
      <Text typo="captionBold" color="gray10">
        텍스트 입니다.
      </Text>
      <Text
        typo="headingL"
        color="success"
        onClick={() =>
          router.push('https://api.tokstudy.com/oauth2/authorize/kakao')
        }
      >
        login
      </Text>
      <Button iconName="CHEVRON_DOWN">글자 버튼</Button>
      <Button size="M" typo="subheadingBold" backgroundColor="primaryDefault">
        주황 버튼
      </Button>
      <Button
        size="L"
        typo="subheadingBold"
        textColor="gray110"
        backgroundColor="gray20"
        iconName="EMOJI_NINJA"
        iconPosition="left"
      >
        일반 버튼
      </Button>
    </div>
  );
}
