'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import QuizCategory from '@/app/toks-main/components/QuizCategory';
import { GOOGLE_FORM_URL, ICON_URL, LOGIN_URL } from '@/common/constants';
import { useAuth } from '@/common/hooks';

import questionSvg from '../../../../public/img/icon/question.svg';
import { SSRSuspense } from '../SSRSuspense';
import { Text } from '../Text';

export const Appbar = () => {
  const router = useRouter();
  const { isLogin, user } = useAuth();
  // TODO: useAppbar hook 구현
  return (
    <SSRSuspense
      fallback={<div className="h-64px bg-gray-120">로딩중입니다..</div>}
    >
      <nav className="sticky left-0 right-0 top-0 z-50 bg-gray-120 pb-[20px]">
        <div className="flex w-full items-center justify-between pb-[20px] pt-[16px]">
          <div className="flex items-center gap-4px" role="button">
            <Image
              width="0"
              height="0"
              src={ICON_URL.TOKS_LOGO}
              alt="toks 로고"
              className="h-auto w-60px"
            />
          </div>
          <button className="flex items-center gap-[12px]">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              <Image src={questionSvg} alt="질문하기" width={28} height={28} />
            </a>
            {/* TODO: 로그인 여부 분기 */}
            {isLogin ? (
              <div className="relative h-[30px] w-[30px]">
                <Image
                  className="rounded-full"
                  src={user?.profileImageUrl || ICON_URL.AVATAR_DEFAULT}
                  alt="아바타"
                  fill
                  objectFit="cover"
                  onClick={() => {
                    router.push('/my-page');
                  }}
                />
              </div>
            ) : (
              <Text
                color="gray10"
                typo="body"
                onClick={() => {
                  router.replace(LOGIN_URL);
                }}
              >
                로그인
              </Text>
            )}
          </button>
        </div>
        <QuizCategory />
      </nav>
    </SSRSuspense>
  );
};
