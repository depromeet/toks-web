'use client';
import { useRouter } from 'next/navigation';

import { GOOGLE_FORM_URL } from '@/common';
import { Button } from '@/common/components/Button';

export const GoogleFormButton = () => {
  const router = useRouter();

  return (
    <Button
      className="w-full"
      size="L"
      typo="subheadingBold"
      backgroundColor="primaryDefault"
      onClick={() => {
        router.push(GOOGLE_FORM_URL);
      }}
    >
      이런 퀴즈가 있었으면 좋겠어요
    </Button>
  );
};
