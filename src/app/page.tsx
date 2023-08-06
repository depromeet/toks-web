'use client';

import { useRouter } from 'next/navigation';

import { Text } from '@/common';
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
      <Tooltip
        message="관심있는 카테고리"
        isVisibleTooltip={true}
        isFirstRender={true}
      >
        <Text typo="subheading" color="success">
          Tooltips!!
        </Text>
      </Tooltip>
    </div>
  );
}
