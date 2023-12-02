'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button, Text } from '@/common';

function Error() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center">
      <Text typo="headingL" color="white" className="mt-120px">
        화면을 불러오지 못했어요.
      </Text>
      <Text typo="bodyBold" color="gray40" className="mt-18px">
        잠시 후에 다시 시도해 주세요.
      </Text>
      <Image
        src={'https://asset.tokstudy.com/legacy/toks-emoji/sad_emoji.svg'}
        width={200}
        height={200}
        alt="에러 아이콘"
      />
      <Button
        backgroundColor="primaryDefault"
        textColor="gray10"
        size="L"
        typo="subheadingBold"
        onClick={() => router.replace('/toks-main')}
      >
        홈으로 돌아가기
      </Button>
    </section>
  );
}

export default Error;
